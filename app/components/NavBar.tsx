import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="mb-10">
      <aside className="navbar bg-gray-100 dark:bg-gray-900 border space-x-3">
        <div className="flex-1">
          <Link className="text-lg font-bold" href="/">
            龚一隆
          </Link>
        </div>
        <div className="flex-none">
          <div className="menu menu-horizontal px-1 join">
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
        </div>
      </aside>
    </div>
  );
};

export default NavBar;
