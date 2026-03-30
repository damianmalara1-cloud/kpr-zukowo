"use server";

import { cookies } from "next/headers";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const GITHUB_REPO = "damianmalara1-cloud/kpr-zukowo";
const NEWS_PATH = "src/data/news.json";
const MATCHES_PATH = "src/data/matches.json";

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

async function getFileFromGitHub(filePath: string = NEWS_PATH) {
  if (!GITHUB_TOKEN) throw new Error("Brak GITHUB_TOKEN");

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`,
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
  message: string,
  filePath: string = NEWS_PATH
) {
  if (!GITHUB_TOKEN) throw new Error("Brak GITHUB_TOKEN");

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`,
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

    content.news.unshift(newArticle);

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

export async function moveArticle(id: string, direction: "up" | "down") {
  const isAuth = await checkAuth();
  if (!isAuth) return { success: false, error: "Brak autoryzacji" };

  try {
    const { content, sha } = await getFileFromGitHub();
    const index = content.news.findIndex((n: NewsArticle) => n.id === id);
    if (index === -1) return { success: false, error: "Nie znaleziono artykułu" };

    const swapIndex = direction === "up" ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= content.news.length) {
      return { success: false, error: "Nie można przesunąć dalej" };
    }

    [content.news[index], content.news[swapIndex]] = [content.news[swapIndex], content.news[index]];

    await updateFileOnGitHub(
      content,
      sha,
      `Zmieniono kolejność: ${content.news[swapIndex].title}`
    );

    return { success: true };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}

// --- MATCHES ---

export interface Match {
  id: string;
  date: string;
  time: string;
  opponent: string;
  opponentLogo: string;
  venue: string;
  isHome: boolean;
  score: string | null;
  description: string;
  matchSponsor: string | null;
}

export async function getMatches() {
  const isAuth = await checkAuth();
  if (!isAuth) return { success: false as const, matches: [] };

  try {
    const { content } = await getFileFromGitHub(MATCHES_PATH);
    return { success: true as const, matches: content.matches as Match[] };
  } catch (e) {
    return { success: false as const, matches: [], error: String(e) };
  }
}

export async function updateMatchScore(id: string, score: string) {
  const isAuth = await checkAuth();
  if (!isAuth) return { success: false, error: "Brak autoryzacji" };

  const scoreRegex = /^\d{1,3}:\d{1,3}$/;
  if (!scoreRegex.test(score)) {
    return { success: false, error: "Nieprawidłowy format wyniku (np. 35:28)" };
  }

  try {
    const { content, sha } = await getFileFromGitHub(MATCHES_PATH);
    const index = content.matches.findIndex((m: Match) => m.id === id);
    if (index === -1) return { success: false, error: "Nie znaleziono meczu" };

    content.matches[index].score = score;

    await updateFileOnGitHub(
      content,
      sha,
      `Wynik meczu: KPR Żukowo vs ${content.matches[index].opponent} — ${score}`,
      MATCHES_PATH
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
