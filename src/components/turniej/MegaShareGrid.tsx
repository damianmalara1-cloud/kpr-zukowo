"use client";

import { useState, useCallback } from "react";

interface MegaShareGridProps {
  url: string;
  shareText: string;
  facebookProfile: string;
  instagramProfile: string;
}

export default function MegaShareGrid({
  url,
  shareText,
  facebookProfile,
  instagramProfile,
}: MegaShareGridProps) {
  const [copied, setCopied] = useState(false);
  const [igClicked, setIgClicked] = useState(false);

  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}&quote=${encodeURIComponent(shareText)}`;

  const waShareUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard zablokowany — silent */
    }
  }, [url]);

  const handleIgClick = useCallback(async () => {
    // Instagram nie wspiera share URL przez popup. Kopiujemy link i otwieramy profil
    // klubu, gdzie user może wkleić w Stories/DM/Reels.
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      /* silent */
    }
    setIgClicked(true);
    setTimeout(() => setIgClicked(false), 3500);
    window.open(instagramProfile, "_blank", "noopener,noreferrer");
  }, [url, instagramProfile]);

  const tiles = [
    {
      key: "fb",
      label: "Facebook",
      sub: "Wrzuć na tablicę",
      href: fbShareUrl,
      onClick: undefined as (() => void) | undefined,
      gradient: "from-[#1877f2] to-[#0e5fc2]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      key: "ig",
      label: "Instagram",
      sub: igClicked ? "Link skopiowany! Wrzuć w Stories" : "Wrzuć w Stories",
      href: undefined as string | undefined,
      onClick: handleIgClick,
      gradient: "from-[#833AB4] via-[#E1306C] to-[#FCAF45]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      key: "wa",
      label: "WhatsApp",
      sub: "Wyślij znajomym",
      href: waShareUrl,
      onClick: undefined,
      gradient: "from-[#25D366] to-[#128C7E]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
    {
      key: "copy",
      label: copied ? "Skopiowane!" : "Skopiuj link",
      sub: copied ? "Wklej gdzie chcesz" : "DM, mail, Stories",
      href: undefined,
      onClick: handleCopy,
      gradient: copied ? "from-green-500 to-green-700" : "from-gray-700 to-gray-900",
      icon: copied ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-full h-full">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
      {tiles.map((tile) => {
        const content = (
          <>
            {/* Glow layer */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              aria-hidden="true"
            />
            <div
              className={`absolute -inset-1 bg-gradient-to-br ${tile.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`}
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-center justify-center gap-3 md:gap-4 h-full">
              <div className="w-12 h-12 md:w-16 md:h-16 text-white">{tile.icon}</div>
              <div className="text-center">
                <div className="font-display text-lg md:text-2xl text-white uppercase tracking-tight leading-none">
                  {tile.label}
                </div>
                <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mt-2">
                  {tile.sub}
                </div>
              </div>
            </div>
          </>
        );

        const baseClass =
          "group relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl aspect-square p-6 md:p-8 transition-[transform,background-color,border-color] hover:scale-[1.04] hover:-translate-y-1 cursor-pointer";

        return tile.href ? (
          <a
            key={tile.key}
            href={tile.href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClass}
          >
            {content}
          </a>
        ) : (
          <button key={tile.key} type="button" onClick={tile.onClick} className={baseClass}>
            {content}
          </button>
        );
      })}
    </div>
  );
}
