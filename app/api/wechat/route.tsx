import { articles } from "@/data/wechat";
import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { MetaTag } from "@/app/articles/ArticleCard";

const PropertyList = [
  "og:title",
  "og:description",
  "og:article:author",
  "twitter:image",
];

async function getMetaTags(url: string) {
  const res = await fetch(url);
  const text = await res.text();
  const $ = cheerio.load(text);
  const tag: MetaTag = {
    image: "",
    link: url,
    title: "no-found",
    author: "",
    description: "no-found",
    platform: "微信公众号",
  };

  $("meta").each((index, element) => {
    const attributes = element.attribs;
    const property = attributes.property;
    if (PropertyList.includes(property)) {
      const prop_name: string = property.substring(
        property.lastIndexOf(":") + 1
      );
      tag[prop_name as keyof MetaTag] = attributes.content;
    }
  });
  return tag;
}

export async function GET() {
  const tags: MetaTag[] = [];
  for (const article of articles) {
    const tag = await getMetaTags(article);
    tags.push(tag);
  }
  return NextResponse.json(tags);
}
