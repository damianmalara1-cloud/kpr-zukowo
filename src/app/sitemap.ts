import type { MetadataRoute } from "next";
import matchesData from "@/data/matches.json";
import newsData from "@/data/news.json";

const BASE_URL = "https://kprzukowo.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/mecze`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/aktualnosci`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/druzyna`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sponsorzy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/mecenasi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/wspolpraca`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kibice`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/o-klubie`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const matchPages: MetadataRoute.Sitemap = matchesData.matches.map((match) => ({
    url: `${BASE_URL}/mecze/${match.id}`,
    lastModified: new Date(match.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const newsPages: MetadataRoute.Sitemap = newsData.news.map((article) => ({
    url: `${BASE_URL}/aktualnosci/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...matchPages, ...newsPages];
}
