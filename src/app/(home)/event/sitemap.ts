import { getAllEvents } from "@/lib/data-service";
import type { MetadataRoute } from "next";

export async function generateSitemaps() {
  const { data: event } = await getAllEvents();
  const ids = event?.map((data) => ({ id: data.id }));

  return ids;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   {
//   id,
// }: {
//   id: number;
// }
  // Google's limit is 50,000 URLs per sitemap
  // const start = id * 50000
  // const end = start + 50000
  const { data: events } = await getAllEvents();
  return (
    events?.map((event) => ({
      url: `localhost:3000/event/${event.id}`,
      lastModified: event.created_at.toISOString(),
    })) ?? []
  );
}
