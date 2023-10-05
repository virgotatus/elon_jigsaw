import React from "react";
import ArticleCard, { MetaTag } from "./ArticleCard";

const ArticlesZone = async () => {
  const response = await fetch(process.env.BASE_URL + "/api/wechat/");
  const articles: MetaTag[] = await response.json();
  return (
    <div className="grid grid-cols-2 gap-4">
      {articles.map((article: MetaTag) => (
        <ArticleCard key={article.link}>{article}</ArticleCard>
      ))}
    </div>
  );
};

export default ArticlesZone;
