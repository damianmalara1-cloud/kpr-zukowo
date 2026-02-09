"use server";

import { cookies } from "next/headers";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const GITHUB_REPO = "damianmalara1-cloud/kpr-zukowo";
const NEWS_PATH = "src/data/news.json";

// --- AUTH ---

export async function login(password: string) {
  if (!ADMIN_PASSWORD) return { success: false, error: "Brak konfiguracji hasła." };
  if (password !== ADMIN_PASSWORD) return { success: false, error: "Nieprawidłowe hasło." };

  const cookieStore = await cookies();
  cookieStore.set("admin-auth", "authenticated", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
  });
  return { success: true };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin-auth");
}

export async function checkAuth() {
  const cookieStore = await cookies();
  return cookieStore.get("admin-auth")?.value === "authenticated";
}

// --- GITHUB API ---

async function getFileFromGitHub() {
  if (!GITHUB_TOKEN) throw new Error("Brak GITHUB_TOKEN");

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${NEWS_PATH}`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const data = await res.json();
  const content = JSON.parse(
    Buffer.from(data.content, "base64").toString("utf-8")
  );
  return { content, sha: data.sha };
}

async function updateFileOnGitHub(
  content: Record<string, unknown>,
  sha: string,
  message: string
) {
  if (!GITHUB_TOKEN) throw new Error("Brak GITHUB_TOKEN");

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${NEWS_PATH}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(
          JSON.stringify(content, null, 2) + "\n"
        ).toString("base64"),
        sha,
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub update failed: ${err}`);
  }

  return true;
}

// --- CRUD ---

export async function getNews() {
  const isAuth = await checkAuth();
  if (!isAuth) return { success: false as const, news: [] };

  try {
    const { content } = await getFileFromGitHub();
    return { success: true as const, news: content.news as NewsArticle[] };
  } catch (e) {
    return { success: false as const, news: [], error: String(e) };
  }
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string | null;
  category: string;
  facebookEmbed: string | null;
}

export async function addArticle(formData: {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  facebookEmbed?: string;
}) {
  const isAuth = await checkAuth();
  if (!isAuth) return { success: false, error: "Brak autoryzacji" };

  try {
    const { content, sha } = await getFileFromGitHub();
    const maxId = Math.max(
      ...content.news.map((n: NewsArticle) => Number(n.id)),
      0
    );
    const newArticle: NewsArticle = {
      id: String(maxId + 1),
      title: formData.title,
      date: new Date().toISOString().split("T")[0],
      excerpt: formData.excerpt,
      content: formData.content,
      image: null,
      category: formData.category,
      facebookEmbed: formData.facebookEmbed?.trim() || null,
    };

    content.news.push(newArticle);

    await updateFileOnGitHub(
      content,
      sha,
      `Dodano artykuł: ${formData.title}`
    );

    return { success: true };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}

export async function editArticle(
  id: string,
  formData: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    facebookEmbed?: string;
  }
) {
  const isAuth = await checkAuth();
  if (!isAuth) return { success: false, error: "Brak autoryzacji" };

  try {
    const { content, sha } = await getFileFromGitHub();
    const index = content.news.findIndex((n: NewsArticle) => n.id === id);
    if (index === -1) return { success: false, error: "Nie znaleziono artykułu" };

    content.news[index] = {
      ...content.news[index],
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      category: formData.category,
      facebookEmbed: formData.facebookEmbed?.trim() || null,
    };

    await updateFileOnGitHub(
      content,
      sha,
      `Zaktualizowano artykuł: ${formData.title}`
    );

    return { success: true };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}

export async function deleteArticle(id: string) {
  const isAuth = await checkAuth();
  if (!isAuth) return { success: false, error: "Brak autoryzacji" };

  try {
    const { content, sha } = await getFileFromGitHub();
    const article = content.news.find((n: NewsArticle) => n.id === id);
    content.news = content.news.filter((n: NewsArticle) => n.id !== id);

    await updateFileOnGitHub(
      content,
      sha,
      `Usunięto artykuł: ${article?.title || id}`
    );

    return { success: true };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}
