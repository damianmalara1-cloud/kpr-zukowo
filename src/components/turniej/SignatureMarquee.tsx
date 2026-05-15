interface SignatureMarqueeProps {
  text: string;
  /** Wariant: 'fill' = solid color text, 'outline' = transparent z obramowaniem */
  variant?: "fill" | "outline";
  /** Kolor tła */
  bgClass?: string;
}

/**
 * Gigantic signature napis na bottom strony — FIFA WC26 vibe ("WE ARE...").
 * Przewija się powoli (marquee) w nieskończoność. Display font.
 */
export default function SignatureMarquee({
  text,
  variant = "fill",
  bgClass = "bg-black",
}: SignatureMarqueeProps) {
  const items = Array.from({ length: 6 }, () => text);
  const textClass =
    variant === "outline"
      ? "text-stroke-white"
      : "text-white";

  return (
    <div className={`relative overflow-hidden ${bgClass} py-8 md:py-12 border-y border-white/10`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className={`font-display text-mega ${textClass} px-8 inline-flex items-center gap-8`}
          >
            {t}
            <span className="text-red text-[0.4em]" aria-hidden="true">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
