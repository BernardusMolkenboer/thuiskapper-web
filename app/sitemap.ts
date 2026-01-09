// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.thuiskapper.app";
  const now = new Date();

  // Add all public, indexable routes here
  const routes = [
    "/",
    "/privacy",
    "/cookies",
    "/account-verwijderen",
    "/algemene-voorwaarden",
    "/veelgestelde-vragen",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "yearly",
    priority: path === "/" ? 1 : 0.5,
  }));
}
