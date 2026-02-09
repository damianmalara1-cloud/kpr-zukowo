import Link from "next/link";
import { notFound } from "next/navigation";
import news from "@/data/news.json";
import { CalendarIcon } from "@/components/Icons";
import type { NewsArticle } from "@/app/admin/actions";

interface PageProps {
  params: Promise<{ id: string }>;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const article = news.news.find((n) => n.id === id);
  if (!article) return { title: "Nie znaleziono | KPR Fit Dieta Żukowo" };
  return {
    title: `${article.title} | KPR Fit Dieta Żukowo`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = (news.news as NewsArticle[]).find((n) => n.id === id);

  if (!article) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <Link
            href="/aktualnosci"
            className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center gap-1 mb-6"
          >
            <span>←</span> Aktualności
          </Link>
          <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-white/20 px-3 py-1 rounded mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">{article.title}</h1>
          <div className="flex items-center gap-2 mt-4 text-gray-300 text-sm">
            <CalendarIcon className="w-4 h-4" />
            <span>{formatDate(article.date)}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full rounded-2xl shadow-lg mb-8 object-cover max-h-[400px]"
          />
        )}

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
          {article.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        {article.facebookEmbed && (
          <div className="mt-8 flex justify-center">
            <iframe
              src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(article.facebookEmbed)}&show_text=true&width=500`}
              width="500"
              height="600"
              style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/aktualnosci"
            className="text-red hover:text-red-dark font-semibold transition-colors inline-flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Wróć do aktualności
          </Link>
        </div>
      </div>
    </div>
  );
}
