import Link from "next/link";
import React from "react";

export interface MetaTag {
  image: string;
  link: string;
  title: string;
  author: string;
  description: string;
  platform: string;
}

interface Props {
  key: string;
  children: MetaTag;
}

export function wxImgUrl(url: string) {
  return url.replace("?wx_fmt=jpeg", "/export");
}

const ArticleCard = ({ children }: Props) => {
  // 替换 \\x0d\\x0a 为换行符
  const processed_description = children.description
    .replace(/\\x0d\\x0a/g, "\n")
    .replace(/\\x26#39;/g, "'");

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <a href={children.link}>
          <img src={wxImgUrl(children.image)} alt={children.title} />
        </a>
      </figure>
      <div className="card-body">
        <Link href={children.link} className="card-title">
          <div className="underline">{children.title}</div>
          <div className="badge badge-secondary">{children.author}</div>
        </Link>
        <p>{processed_description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
