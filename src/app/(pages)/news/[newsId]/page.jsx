import React from "react";
import Link from "next/link";
import Image from "next/image";
import Side from "../Side";
import { FaAngleRight } from "react-icons/fa";
import Submenu from "../../../components/molecules/Submenu";
import UroFlag from "../../../../../public/img/Uroflag.png";
import TextContent from "../../../components/molecules/TextContent";
import Line from "../../../../../public/icons/Line.svg";
import SuggestedNews from "../../../../../public/img/SuggestedNews.png";
import SuggestedNews1 from "../../../../../public/img/SuggestedNews1.png";
import SuggestedNews2 from "../../../../../public/img/SuggestedNews2.png";
import SuggestedNews3 from "../../../../../public/img/SuggestedNews3.png";
import SaveIcon from "../../../components/atoms/SaveIcon";

function newsId({ params }) {
  return (
    <div className="font-roboto flex flex-col gap-6">
      <Submenu />
      <main className="flex justify-center gap-5 ">
        <div className="flex flex-col gap-6">
         
          <Image src={UroFlag} alt="news" width={950} height={538} />
          <TextContent />
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex justify-center items-center gap-6 font-roboto">
              <div className="text-lg font-medium">Suggested News</div>

              <div>
                <Image src={Line} className="w-[700px]" alt="news" />
              </div>
              <Link href="/News">
                <div className="flex items-center cursor-pointer mb-2 text-[16px] font-light">
                  See More
                  <span>
                    <FaAngleRight className="font-bold" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3 ">
                <Link href="/news">
                  <Image src={SuggestedNews} alt="news" />
                  <div className="flex justify-start gap-2">
                    <h2 className="text-lg font-bold font-times">
                      Title of the Suggested News
                    </h2>
                    <SaveIcon />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/news">
                  <Image src={SuggestedNews1} alt="news" />
                  <div className="flex justify-start gap-2">
                    <h2 className="text-lg font-bold font-times">
                      Title of the Suggested News
                    </h2>
                    <SaveIcon />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/news">
                  <Image src={SuggestedNews2} alt="news" />
                  <div className="flex justify-start gap-2">
                    <h2 className="text-lg font-bold font-times">
                      Title of the Suggested News
                    </h2>
                    <SaveIcon />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/news">
                  <Image src={SuggestedNews3} alt="news" />
                  <div className="flex justify-start gap-2">
                    <h2 className="text-lg font-bold font-times">
                      Title of the Suggested News
                    </h2>
                    <SaveIcon />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        
        </div>
     
        <Side />
      </main>
    </div>
  );
}

export default newsId;
