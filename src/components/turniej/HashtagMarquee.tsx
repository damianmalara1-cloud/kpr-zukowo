interface HashtagMarqueeProps {
  hashtags: string[];
}

export default function HashtagMarquee({ hashtags }: HashtagMarqueeProps) {
  // Powtarzamy 2x dla seamless loop — animacja przesuwa o -50%
  const doubled = [...hashtags, ...hashtags];

  return (
    <div className="overflow-hidden bg-gradient-to-r from-navy-dark via-black to-navy-dark py-5 border-y border-white/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="inline-flex items-center gap-3 px-6 text-2xl md:text-3xl font-bold text-white/90 tracking-wide"
          >
            <span className="text-red text-3xl md:text-4xl" aria-hidden="true">
              ★
            </span>
            <span>{tag}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
