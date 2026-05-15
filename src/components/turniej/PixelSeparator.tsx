interface PixelSeparatorProps {
  /** Kolor szachownicy (Tailwind class lub hex). Default: red klubowy. */
  color?: string;
  /** Wysokość pasa szachownicy w wierszach (każdy wiersz = 16px). Default 4. */
  rows?: number;
}

/**
 * 8-bit szachownica jako separator między sekcjami — FIFA WC26 inspired.
 * Pełnoszerokościowy, lekka graficzna sygnatura turnieju.
 */
export default function PixelSeparator({ color = "#dc2626", rows = 4 }: PixelSeparatorProps) {
  const cells = 40; // poziomo
  const cellSize = 16;
  const height = rows * cellSize;

  return (
    <div
      className="w-full overflow-hidden"
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${cells * cellSize} ${height}`}
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cells }).map((_, col) => {
            const fill = (row + col) % 2 === 0 ? color : "transparent";
            return (
              <rect
                key={`${row}-${col}`}
                x={col * cellSize}
                y={row * cellSize}
                width={cellSize}
                height={cellSize}
                fill={fill}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}
