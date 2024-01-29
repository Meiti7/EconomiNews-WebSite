import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Line from "../../../../public/icons/Line.svg";
import Image from "next/image";
import Suggested from "../atoms/Home.atoms/Suggested";

function SuggestedNews() {
  return (
    <div className="flex flex-col justify-center items-center mb gap-6 font-roboto max-w-[1280px] mx-auto">
      <div className="flex justify-center items-center gap-6 font-roboto">
        <div className="text-lg font-medium">Suggested News</div>

        <div>
          <Image src={Line} className="max-w-[980px]" alt="news"></Image>
        </div>
        <Link href="/shortNews">
          <div className="flex items-center cursor-pointer mb-2 text-[16px] font-light">
            See More
            <span>
              <FaAngleRight className="font-bold" />
            </span>
          </div>
        </Link>
      </div>

      <Suggested />
    </div>
  );
}

export default SuggestedNews;
