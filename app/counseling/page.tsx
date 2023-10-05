import Link from "next/link";
import React from "react";
import poster from "../assets/counselling_poster.png";
import Image from "next/image";

const CounselingPage = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row space-x-3">
          <Image
            src={poster}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="my counselling poster"
          />
          <div>
            <h1 className="text-5xl font-bold">你好呀</h1>
            <p className="py-6">
              我是一名心理咨询师，目前处于长程培训，欢迎预约
            </p>
            <Link
              className="btn btn-primary"
              href="https://cal.com/yilong-gong/preview"
            >
              预约咨询时间
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounselingPage;
