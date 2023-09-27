import { NextResponse } from "next/server";
interface ProjectProps {
  image: string;
  title: string;
  description: string;
}

async function getProjects(url: string) {
  return "aa";
}

export async function GET() {
  const tags: ProjectProps[] = [
    { image: "aa", title: "灵感炼丹炉", description: "qing" },
    { image: "aa", title: "热线机器人", description: "qing" },
    { image: "aa", title: "扭蛋机", description: "qing" },
    { image: "aa", title: "Tarot", description: "qing" },
  ];

  return NextResponse.json(tags);
}
