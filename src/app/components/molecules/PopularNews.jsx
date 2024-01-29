import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import Poimage from "../../../../public/img/Poimage.png";
import Poimage1 from "../../../../public/img/Poimage1.png";
import Poimage2 from "../../../../public/img/Poimage2.png";
import Poimage3 from "../../../../public/img/Poimage3.png";
import Poimage4 from "../../../../public/img/Poimage4.png";
function PopularNews() {
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
            <Image src={Poimage} alt="news" />
            <p className="font-times text-lg font-bold">
              Title of the popular news
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center justify-center">
            <Image src={Poimage1} alt="news" />
            <p className="font-times text-lg font-bold">
              Title of the popular news
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center justify-center">
            <Image src={Poimage2} alt="news" />
            <p className="font-times text-lg font-bold">
              Title of the popular news
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center justify-center">
            <Image src={Poimage3} alt="news" />
            <p className="font-times text-lg font-bold">
              Title of the popular news
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center justify-center">
            <Image src={Poimage4} alt="news" />
            <p className="font-times text-lg font-bold">
              Title of the popular news
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PopularNews;
