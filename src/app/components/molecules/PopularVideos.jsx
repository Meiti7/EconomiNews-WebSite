import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import VideoImg1 from "../../../../public/img/Video12.png"
import VideoImg2 from "../../../../public/img/Video13.png"
import VideoImg3 from "../../../../public/img/Video14.png"
import VideoImg4 from "../../../../public/img/Video15.png"
import VideoImg5 from "../../../../public/img/Video16.png"
function PopularVideos() {
  return (
    <div className="border border-[#EFEFEF] p-6 flex flex-col gap-3">
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <label className="text-lg font-medium">Popular news</label>
        <Link href="/popularNews">
          <div className="flex items-center cursor-pointer mb-2 text-[16px] font-light">
            See More
            <span>
              <FaAngleRight className="font-bold" />
            </span>
          </div>
        </Link>
      </div>
    </div>
    <div className="flex flex-col gap-3">
      <Link href="/">
        <div className="flex gap-2 items-center justify-center">
          <Image src={VideoImg1} alt="news" />
          <p className="font-times text-lg font-bold">
          Title of the news video
          </p>
        </div>
      </Link>
      <Link href="/">
        <div className="flex gap-2 items-center justify-center">
          <Image src={VideoImg2} alt="news" />
          <p className="font-times text-lg font-bold">
          Title of the news video
          </p>
        </div>
      </Link>
      <Link href="/">
        <div className="flex gap-2 items-center justify-center">
          <Image src={VideoImg3} alt="news" />
          <p className="font-times text-lg font-bold">
          Title of the news video
          </p>
        </div>
      </Link>
      <Link href="/">
        <div className="flex gap-2 items-center justify-center">
          <Image src={VideoImg4} alt="news" />
          <p className="font-times text-lg font-bold">
          Title of the news video
          </p>
        </div>
      </Link>
      <Link href="/">
        <div className="flex gap-2 items-center justify-center">
          <Image src={VideoImg5} alt="news" />
          <p className="font-times text-lg font-bold">
          Title of the news video
          </p>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default PopularVideos