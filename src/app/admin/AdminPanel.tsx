"use client";

import { useState, useEffect, useCallback } from "react";
import {
  login,
  logout,
  getNews,
  addArticle,
  editArticle,
  deleteArticle,
  type NewsArticle,
} from "./actions";

const CATEGORIES = ["Klub", "Mecz", "Transfery", "Sponsor", "Wydarzenie"];

// --- LOGIN ---

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await login(password);
    setLoading(false);
    if (result.success) {
      onSuccess();
    } else {
      setError(result.error || "Błąd logowania");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">KPR</span>
          </div>
          <h1 className="text-2xl font-bold text-navy">Panel administracyjny</h1>
          <p className="text-gray-500 text-sm mt-1">Zaloguj się aby zarządzać treścią</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hasło
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all text-gray-900"
            placeholder="Wprowadź hasło..."
            autoFocus
          />
          {error && (
            <p className="text-red text-sm mt-2">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full mt-4 bg-navy hover:bg-navy-dark disabled:bg-gray-300 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {loading ? "Logowanie..." : "Zaloguj się"}
          </button>
        </form>
      </div>
    </div>
  );
}

// --- ARTICLE FORM ---

function ArticleForm({
  onSave,
  onCancel,
  article,
}: {
  onSave: () => void;
  onCancel: () => void;
  article?: NewsArticle;
}) {
  const isEditing = !!article;
  const [title, setTitle] = useState(article?.title ?? "");
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [content, setContent] = useState(article?.content ?? "");
  const [category, setCategory] = useState(article?.category ?? CATEGORIES[0]);
  const [facebookUrl, setFacebookUrl] = useState(article?.facebookEmbed ?? "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim() || !content.trim()) {
      setError("Wypełnij wszystkie pola.");
      return;
    }
    setSaving(true);
    setError("");
    const formData = { title, excerpt, content, category, facebookEmbed: facebookUrl || undefined };
    const result = isEditing
      ? await editArticle(article.id, formData)
      : await addArticle(formData);
    setSaving(false);
    if (result.success) {
      onSave();
    } else {
      setError(result.error || "Błąd zapisu");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-xl font-bold text-navy mb-6">
        {isEditing ? "Edytuj artykuł" : "Nowy artykuł"}
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tytuł</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy outline-none text-gray-900"
            placeholder="Tytuł artykułu..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategoria</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy outline-none text-gray-900 bg-white"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Zajawka <span className="text-gray-400 font-normal">(widoczna na liście)</span>
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={2}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy outline-none resize-none text-gray-900"
            placeholder="Krótki opis artykułu..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Treść
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy outline-none resize-y text-gray-900"
            placeholder="Pełna treść artykułu... (nowa linia = nowy akapit)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Link do posta na Facebooku (galeria zdjęć) <span className="text-gray-400 font-normal">(opcjonalne)</span>
          </label>
          <input
            type="url"
            value={facebookUrl}
            onChange={(e) => setFacebookUrl(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy outline-none text-gray-900"
            placeholder="https://www.facebook.com/kprzukowo/posts/..."
          />
        </div>
      </div>

      {error && <p className="text-red text-sm mt-4">{error}</p>}

      <div className="flex gap-3 mt-6">
        <button
          type="submit"
          disabled={saving}
          className="flex-1 bg-red hover:bg-red-dark disabled:bg-gray-300 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          {saving
            ? (isEditing ? "Zapisywanie..." : "Publikowanie...")
            : (isEditing ? "Zapisz zmiany" : "Opublikuj artykuł")}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
        >
          Anuluj
        </button>
      </div>

      {saving && (
        <p className="text-gray-500 text-xs mt-3 text-center">
          Zapisywanie do repozytorium... Strona zaktualizuje się automatycznie w ciągu ~2 min.
        </p>
      )}
    </form>
  );
}

// --- DASHBOARD ---

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState("");

  const fetchNews = useCallback(async () => {
    setLoading(true);
    const result = await getNews();
    if (result.success) {
      setNews(
        [...result.news].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      );
    } else {
      setError("error" in result ? String(result.error) : "Nie udało się pobrać artykułów.");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  async function handleDelete(id: string) {
    if (!confirm("Na pewno chcesz usunąć ten artykuł?")) return;
    setDeleting(id);
    const result = await deleteArticle(id);
    if (result.success) {
      setNews((prev) => prev.filter((n) => n.id !== id));
    } else {
      alert(result.error || "Błąd usuwania");
    }
    setDeleting(null);
  }

  async function handleLogout() {
    await logout();
    onLogout();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">KPR</span>
            </div>
            <h1 className="font-bold text-lg">Panel administracyjny</h1>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Wyloguj
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Actions */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-navy">Aktualności</h2>
          {!showForm && !editingArticle && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red hover:bg-red-dark text-white font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm"
            >
              + Nowy artykuł
            </button>
          )}
        </div>

        {/* Form */}
        {(showForm || editingArticle) && (
          <div className="mb-8">
            <ArticleForm
              key={editingArticle?.id ?? "new"}
              article={editingArticle ?? undefined}
              onSave={() => {
                setShowForm(false);
                setEditingArticle(null);
                fetchNews();
              }}
              onCancel={() => {
                setShowForm(false);
                setEditingArticle(null);
              }}
            />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red/10 text-red rounded-lg p-4 mb-6 text-sm">
            {error}
          </div>
        )}

        {/* Article list */}
        {loading ? (
          <div className="text-center py-12 text-gray-400">Ładowanie...</div>
        ) : news.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">Brak artykułów.</p>
            <button
              onClick={() => setShowForm(true)}
              className="text-red hover:text-red-dark font-semibold transition-colors"
            >
              Dodaj pierwszy artykuł
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {news.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-start justify-between gap-4"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-wider font-semibold bg-navy/10 text-navy px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(article.date).toLocaleDateString("pl-PL", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="font-semibold text-navy truncate">{article.title}</h3>
                  <p className="text-sm text-gray-500 truncate">{article.excerpt}</p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setEditingArticle(article);
                    }}
                    className="text-gray-300 hover:text-navy transition-colors p-1"
                    title="Edytuj artykuł"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    disabled={deleting === article.id}
                    className="text-gray-300 hover:text-red transition-colors p-1"
                    title="Usuń artykuł"
                  >
                    {deleting === article.id ? (
                      <span className="text-xs">...</span>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-center text-gray-400 text-xs mt-8">
          Po dodaniu lub usunięciu artykułu strona zaktualizuje się automatycznie w ciągu ~2 minut.
        </p>
      </div>
    </div>
  );
}

// --- MAIN ---

export default function AdminPanel({ initialAuth }: { initialAuth: boolean }) {
  const [isAuth, setIsAuth] = useState(initialAuth);

  if (!isAuth) {
    return <LoginForm onSuccess={() => setIsAuth(true)} />;
  }

  return <Dashboard onLogout={() => setIsAuth(false)} />;
}
