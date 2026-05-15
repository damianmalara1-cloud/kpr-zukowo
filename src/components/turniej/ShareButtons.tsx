"use client";

import { useCallback, useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
  text: string;
  variant?: "hero" | "inline";
}

const ICON_SIZE = "w-5 h-5";

export default function ShareButtons({ url, title, text, variant = "hero" }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleNativeShare = useCallback(async () => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        /* User cancelled — open FB sharer as fallback */
      }
    }
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, [title, text, url]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — silent */
    }
  }, [url]);

  const baseBtn =
    variant === "hero"
      ? "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-[transform,box-shadow,background-color] hover:scale-105"
      : "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-[transform,box-shadow,background-color] hover:scale-105";

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <button
        type="button"
        onClick={handleNativeShare}
        className={`${baseBtn} bg-white text-navy hover:bg-gray-100 shadow-lg`}
      >
        <svg className={ICON_SIZE} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"
          />
        </svg>
        Udostępnij wydarzenie
      </button>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseBtn} bg-[#1877f2] text-white hover:bg-[#0e5fc2] shadow-lg`}
      >
        <svg className={ICON_SIZE} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Facebook
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className={`${baseBtn} bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/30`}
        aria-label="Skopiuj link"
      >
        {copied ? (
          <>
            <svg className={ICON_SIZE} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Skopiowano!
          </>
        ) : (
          <>
            <svg className={ICON_SIZE} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
            Skopiuj link
          </>
        )}
      </button>
    </div>
  );
}
