"use client";

import { useState } from "react";

const categories = [
  {
    name: "MVP Meczu",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    description: "Wybór najlepszego zawodnika spotkania — Twoja marka kojarzona z najlepszymi na boisku.",
  },
  {
    name: "Bramka Meczu",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Najpiękniejsze bramki z każdego meczu — Twoja marka przy emocjach, które kibice przeżywają najintensywniej.",
  },
  {
    name: "Obrona Meczu",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "Spektakularne interwencje bramkarza — format, który budzi respekt i podziw wśród widzów.",
  },
  {
    name: "Moment Sezonu",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    description: "Kompilacja najlepszych momentów całego sezonu — format o najdłuższym życiu i największym zasięgu.",
  },
];

export default function EmocjeCategoryPicker() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <p className="font-semibold text-navy text-sm mb-4 text-center">Wybierz kategorię wideo do patronatu:</p>
      <div className="grid grid-cols-2 gap-3 mb-5">
        {categories.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => setActive(i)}
            className={`relative rounded-xl px-4 py-5 text-center transition-[color,background-color,border-color,box-shadow,transform] duration-300 cursor-pointer border-2 group ${
              active === i
                ? "bg-navy text-white border-navy shadow-lg scale-[1.03]"
                : "bg-white text-navy border-amber-200 hover:border-navy/40 hover:shadow-md"
            }`}
          >
            <div className={`mx-auto mb-2 transition-colors duration-300 ${active === i ? "text-amber-400" : "text-amber-600 group-hover:text-navy"}`}>
              {cat.icon}
            </div>
            <span className="font-bold text-sm block">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Opis wybranej kategorii */}
      <div className="bg-white border border-amber-200 rounded-xl p-5 min-h-[80px] transition-opacity duration-300 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="text-amber-600 flex-shrink-0 mt-0.5">
            {categories[active].icon}
          </div>
          <div>
            <p className="font-bold text-navy text-sm mb-1">{categories[active].name}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{categories[active].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
