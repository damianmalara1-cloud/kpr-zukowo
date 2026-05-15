interface MapTeam {
  name: string;
  shortName: string;
  city: string;
  color: string;
  isKpr: boolean;
  /** Współrzędne na uproszczonej mapie Polski (0-100% w obu osiach) */
  x: number;
  y: number;
}

interface TournamentMapProps {
  teams: MapTeam[];
  venueLabel: string;
  venueCity: string;
  venueX: number;
  venueY: number;
}

/**
 * Mapa Polski z markerami 4 klubów + miejsce turnieju (Kielce).
 * Stylizowane SVG, bez external dep. Kontur Polski uproszczony (silhouette).
 */
export default function TournamentMap({
  teams,
  venueLabel,
  venueCity,
  venueX,
  venueY,
}: TournamentMapProps) {
  return (
    <section className="relative bg-navy-dark text-white py-20 md:py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 scroll-fade-up">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-red font-bold mb-4">
            Mapa turnieju
          </p>
          <h2 className="font-display text-huge text-white">Skąd jadą drużyny</h2>
        </div>

        <div className="relative aspect-[4/3] max-w-3xl mx-auto bg-black/40 rounded-2xl overflow-hidden border border-white/10 scroll-3d-up">
          {/* Uproszczony kontur Polski (silhouette polygon) */}
          <svg
            viewBox="0 0 1000 800"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            {/* Kontur Polski — bardzo uproszczony, dekoracyjny */}
            <path
              d="M 200 200 L 280 150 L 380 130 L 470 120 L 560 140 L 640 170 L 720 200 L 780 250 L 820 320 L 850 400 L 830 480 L 800 560 L 740 620 L 660 660 L 560 670 L 460 650 L 360 620 L 280 580 L 220 520 L 180 440 L 170 360 L 180 280 Z"
              fill="rgba(255,255,255,0.06)"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
            />
            {/* Subtle grid overlay */}
            <defs>
              <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="1000" height="800" fill="url(#map-grid)" />
          </svg>

          {/* Drużyny — markery */}
          {teams.map((team) => (
            <div
              key={team.name}
              className="absolute group cursor-default"
              style={{
                left: `${team.x}%`,
                top: `${team.y}%`,
                transform: "translate(-50%, -100%)",
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 ${
                    team.isKpr ? "ring-4 ring-red animate-pulse-subtle" : "ring-2 ring-white/30"
                  }`}
                  style={{ backgroundColor: team.color }}
                >
                  <span className="font-display text-white text-xs md:text-sm">
                    {team.shortName.slice(0, 3).toUpperCase()}
                  </span>
                </div>
                <div
                  className="w-0.5 h-3 md:h-4"
                  style={{ backgroundColor: team.color }}
                  aria-hidden="true"
                />
                <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 mt-1 text-[10px] md:text-xs font-bold text-white whitespace-nowrap">
                  {team.shortName}
                </div>
              </div>
            </div>
          ))}

          {/* Venue (Kielce) — special marker */}
          <div
            className="absolute"
            style={{
              left: `${venueX}%`,
              top: `${venueY}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-red flex items-center justify-center shadow-2xl shadow-red/50 animate-glow-pulse">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L1 21h22L12 2zm0 4l8.5 13H3.5L12 6z" />
                </svg>
              </div>
              <div className="w-0.5 h-4 bg-red" aria-hidden="true" />
              <div className="bg-red text-white rounded-md px-3 py-1.5 mt-1 text-xs md:text-sm font-bold whitespace-nowrap shadow-lg">
                {venueLabel} · {venueCity}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-white/60 mt-8 text-sm md:text-base scroll-fade-up">
          22-24 maja wszystkie cztery drużyny zjadą do <span className="text-red font-bold">{venueCity}</span>.
          Jeden awans do Ligi Centralnej.
        </p>
      </div>
    </section>
  );
}
