interface ManifestoBlockProps {
  eyebrow?: string;
  headline: string;
  body: string;
}

/**
 * Centered text block w stylu FIFA "HOME OF THE FIFA WORLD CUP 26™ FINAL".
 * Czysta narracja, biały bg, nagłówek display, body krótkie.
 */
export default function ManifestoBlock({ eyebrow, headline, body }: ManifestoBlockProps) {
  return (
    <section className="bg-white py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-4 text-center scroll-fade-up">
        {eyebrow && (
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-red font-bold mb-6">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-navy text-huge mb-8">{headline}</h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
          {body}
        </p>
      </div>
    </section>
  );
}
