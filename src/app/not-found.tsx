import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Strona nie została znaleziona
        </p>
        <p className="text-gray-500 mb-8">
          Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-red hover:bg-red-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Strona główna
          </Link>
          <Link
            href="/mecze"
            className="bg-navy hover:bg-navy-light text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Terminarz
          </Link>
          <Link
            href="/aktualnosci"
            className="bg-navy hover:bg-navy-light text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Aktualności
          </Link>
        </div>
      </div>
    </div>
  );
}
