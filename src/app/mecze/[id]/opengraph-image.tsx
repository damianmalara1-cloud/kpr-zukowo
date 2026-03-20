import { ImageResponse } from "next/og";
import matches from "@/data/matches.json";

export const runtime = "edge";
export const alt = "KPR Fit Dieta Żukowo — Mecz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const match = matches.matches.find((m) => m.id === id);

  const homeTeam = match?.isHome
    ? "KPR Fit Dieta Żukowo"
    : (match?.opponent ?? "Gość");
  const awayTeam = match?.isHome
    ? (match?.opponent ?? "Gość")
    : "KPR Fit Dieta Żukowo";

  const date = match?.date
    ? new Date(match.date).toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";
  const time = match?.time ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a1628",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://kprzukowo.pl/images/logo/kpr_zukowo_beztla.png"
            alt="KPR"
            width={80}
            height={80}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            fontSize: 42,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          <span>{homeTeam}</span>
          <span
            style={{
              color: "#e53e3e",
              fontSize: 36,
            }}
          >
            {match?.score ?? "vs"}
          </span>
          <span>{awayTeam}</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "32px",
            fontSize: 22,
            color: "#94a3b8",
          }}
        >
          {date && <span>{date}</span>}
          {time && <span>{time}</span>}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: 18,
            color: "#e53e3e",
            fontWeight: 600,
          }}
        >
          kprzukowo.pl
        </div>
      </div>
    ),
    { ...size }
  );
}
