import { ImageResponse } from "next/og";
import news from "@/data/news.json";

export const runtime = "edge";
export const alt = "KPR Fit Dieta Żukowo — Aktualności";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = news.news.find((n) => n.id === id);
  const title = article?.title ?? "Aktualności";
  const date = article?.date
    ? new Date(article.date).toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

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
          <span
            style={{
              fontSize: 28,
              color: "#ffffff",
              fontWeight: 600,
            }}
          >
            KPR Fit Dieta Żukowo
          </span>
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        {date && (
          <div
            style={{
              fontSize: 22,
              color: "#94a3b8",
              marginTop: "24px",
            }}
          >
            {date}
          </div>
        )}
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
