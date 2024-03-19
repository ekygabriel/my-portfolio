import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://eua.vercel.app/about",
    },
    {
      url: "https://eua.vercel.app/work",
    },
    {
      url: "https://eua.vercel.app/work/ally-designs",
    },
    {
      url: "https://eua.vercel.app/work/glamour-guide",
    },
    {
      url: "https://eua.vercel.app/work/el-lugar-restaurant",
    },
  ];
}
