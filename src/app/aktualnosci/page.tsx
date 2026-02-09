import Link from "next/link";
import news from "@/data/news.json";

export const metadata = {
  title: "Aktualności | KPR Fit Dieta Żukowo",
  description: "Najnowsze wiadomości z KPR Fit Dieta Żukowo. Bądź na bieżąco!",
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function AktualnosciPage() {
  const sortedNews = [...news.news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative text-white pt-28 pb-16 bg-navy">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/aktualnosci.jpg')", backgroundPosition: "center 29%" }}
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aktualności</h1>
          <p className="text-xl text-gray-200">
            Bądź na bieżąco z życiem klubu
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {sortedNews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Brak aktualności do wyświetlenia.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {sortedNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="md:flex">
                  {item.image && (
                    <div className="md:w-1/3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                  )}
                  <div className={`p-6 ${item.image ? "md:w-2/3" : "w-full"}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-navy/10 text-navy px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-400">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-navy mb-3">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <Link
                      href={`/aktualnosci/${item.id}`}
                      className="text-red hover:text-red-dark font-semibold transition-colors"
                    >
                      Czytaj więcej →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Social media CTA */}
        <div className="mt-16 bg-navy rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-4">Więcej na bieżąco?</h3>
          <p className="text-gray-300 mb-6">
            Obserwuj nas w mediach społecznościowych, żeby nie przegapić żadnej aktualności!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/kprzukowo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/kpr_zukowo/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
