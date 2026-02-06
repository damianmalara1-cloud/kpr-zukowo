"use client";

import { useState, useEffect } from "react";

interface TeamPhotoProps {
  src: string;
  alt: string;
}

export default function TeamPhoto({ src, alt }: TeamPhotoProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Thumbnail */}
      <div
        className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[21/9] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-[center_35%]"
        />
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-navy/90 backdrop-blur-md" />

          {/* Content */}
          <div
            className="relative z-10 max-w-7xl w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Full photo */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={src}
                alt={alt}
                className="w-full h-auto"
              />
            </div>

            {/* Caption */}
            <p className="text-center text-white/80 mt-4 text-sm">
              Kliknij poza zdjęcie lub naciśnij Escape, aby zamknąć
            </p>
          </div>
        </div>
      )}
    </>
  );
}
