"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Line from "../../../../public/icons/Line.svg";
import Image from "next/image";

const VideoStand = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center items-center gap-6 font-roboto">
        <div className="text-lg font-medium">Video Stand</div>

        <div>
          <Image src={Line} className="w-[700px]" height="auto" alt="news" />
        </div>
        <Link href="/shortVideos">
          <div className="flex items-center cursor-pointer mb-2 text-[16px] font-light">
            See More
            <span>
              <FaAngleRight className="font-bold" />
            </span>
          </div>
        </Link>
      </div>
      <div>
        <video controls className="w-[950px] h-[500px]">
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col gap-1">
          <video className="w-[310px] h-[164px]">
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
          <label className="font-times text-lg font-bold">
            Title of the video goes here
          </label>
        </div>
        <div className="flex flex-col gap-1">
          <video className="w-[310px] h-[164px]">
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
          <label className="font-times text-lg font-bold">
            Title of the video goes here
          </label>
        </div>
        <div className="flex flex-col gap-1">
          <video className="w-[310px] h-[164px]">
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
          <label className="font-times text-lg font-bold">
            Title of the video goes here
          </label>
        </div>
      </div>
    </div>
  );
};

export default VideoStand;
