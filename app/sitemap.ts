import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms", "/cookie-policy", "/popia", "/paia", "/thank-you"].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.6 : 1,
  }));
}
