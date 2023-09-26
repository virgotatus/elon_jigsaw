import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <aside className="bg-gray-100 dark:bg-gray-900 border mb-3 space-x-3">
        <div className="join">
          <Link className="join-item btn" href="/">
            龚一隆
          </Link>
          <Link className="join-item btn" href="/projects">
            作品
          </Link>
          <Link className="join-item btn" href="/counseling">
            心理咨询
          </Link>
          <Link className="join-item btn" href="/articles">
            写作
          </Link>
          <Link className="join-item btn" href="/parties">
            活动
          </Link>
          <Link className="join-item btn" href="/about">
            关于
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default NavBar;
