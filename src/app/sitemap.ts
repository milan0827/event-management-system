import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "localhost:3000",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // Routes will be added eventually
    {
      url: "localhost:3000/about",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];
}
