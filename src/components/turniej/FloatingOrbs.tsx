// CSS-only animowane "kule" tła — używane w hero turniejowym dla dynamizmu.
// Brak deps, brak JS, motion respektuje prefers-reduced-motion.

interface FloatingOrbsProps {
  variant?: "dark" | "light";
  parallax?: boolean;
}

export default function FloatingOrbs({ variant = "dark", parallax = false }: FloatingOrbsProps) {
  const orbColor =
    variant === "dark"
      ? ["bg-red/20", "bg-red/15", "bg-navy-light/30", "bg-red/10", "bg-red/25"]
      : ["bg-red/10", "bg-navy/8", "bg-red/8", "bg-navy/10", "bg-red/12"];

  const parallaxClass = parallax ? "scroll-parallax-fast" : "";

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${parallaxClass}`}
      aria-hidden="true"
    >
      <div
        className={`absolute top-[10%] left-[8%] w-72 h-72 ${orbColor[0]} rounded-full blur-3xl animate-float-up`}
        style={{ animationDelay: "0s" }}
      />
      <div
        className={`absolute top-[40%] right-[12%] w-96 h-96 ${orbColor[1]} rounded-full blur-3xl animate-float-down`}
        style={{ animationDelay: "-3s" }}
      />
      <div
        className={`absolute bottom-[15%] left-[35%] w-80 h-80 ${orbColor[2]} rounded-full blur-3xl animate-float-up`}
        style={{ animationDelay: "-7s" }}
      />
      <div
        className={`absolute top-[60%] left-[55%] w-64 h-64 ${orbColor[3]} rounded-full blur-3xl animate-float-down`}
        style={{ animationDelay: "-11s" }}
      />
      <div
        className={`absolute bottom-[5%] right-[5%] w-72 h-72 ${orbColor[4]} rounded-full blur-3xl animate-float-up`}
        style={{ animationDelay: "-5s" }}
      />
    </div>
  );
}
