import Image from "next/image";

interface RivalCardProps {
  name: string;
  shortName: string;
  city: string;
  color: string;
  logo: string;
  isKpr: boolean;
}

export default function RivalCard({ name, shortName, city, color, logo, isKpr }: RivalCardProps) {
  return (
    <div
      className={`group relative rounded-xl overflow-hidden border transition-[transform,box-shadow] hover:scale-[1.03] hover:shadow-2xl ${
        isKpr
          ? "bg-gradient-to-br from-navy via-navy-dark to-black text-white border-red shadow-xl"
          : "bg-white text-navy border-gray-200 shadow-lg"
      }`}
    >
      {/* Akcent koloru klubowego u góry */}
      <div className="h-1.5 w-full" style={{ backgroundColor: color }} aria-hidden="true" />

      {/* Decorative glow on hover */}
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />

      <div className="relative p-6 md:p-7">
        <div className="flex items-start gap-4 md:gap-5">
          {/* Logo */}
          <div
            className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110 ${
              isKpr ? "bg-white/95 p-1" : "bg-gray-50 p-1"
            }`}
          >
            <Image
              src={logo}
              alt={`Logo ${name}`}
              fill
              sizes="(max-width: 768px) 64px, 80px"
              className="object-contain p-2"
            />
          </div>

          {/* Tekst */}
          <div className="flex-1 min-w-0">
            {isKpr && (
              <span className="inline-block bg-red text-white text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
                Nasi
              </span>
            )}

            <h3
              className={`text-lg md:text-xl font-bold leading-tight mb-1.5 ${
                isKpr ? "text-white" : "text-navy"
              }`}
            >
              {shortName}
            </h3>

            <div
              className={`flex items-center gap-1.5 text-xs md:text-sm ${
                isKpr ? "text-white/70" : "text-gray-500"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="truncate">{city}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
