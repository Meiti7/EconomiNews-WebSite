import React from "react";
import Link from "next/link";
import Image from "next/image";
import Side from "../Side";
import { FaAngleRight } from "react-icons/fa";
import Submenu from "../../../components/molecules/Submenu";
import TextContent from "../../../components/molecules/TextContent";
import Line from "../../../../../public/icons/Line.svg";
import SaveIcon from "../../../components/atoms/SaveIcon";
function videosId({ params }) {
  return (
    <div className="font-roboto flex flex-col gap-6">
      <Submenu />
      <main className="flex justify-center gap-5 ">
        <div className="flex flex-col gap-6">
          <video className="w-[950px] h-[538px]" controls>
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
          <TextContent />
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex justify-center items-center gap-6 font-roboto">
              <div className="text-lg font-medium">Suggested Videos</div>

              <div>
                <Image src={Line} className="w-[700px]" alt="news"/>
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
                  <div>
                  <video controls className="w-[465px] h-[300px]">
                      <source src="/videos/video1.mp4" type="video/mp4" />
                    </video>
                  </div>
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
                  <div>
                  <video controls className="w-[465px] h-[300px]">
                      <source src="/videos/video1.mp4" type="video/mp4" />
                    </video>
                  </div>
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
                  <div>
                    <video controls className="w-[465px] h-[300px]">
                      <source src="/videos/video1.mp4" type="video/mp4" />
                    </video>
                  </div>
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
                  <div>
                  <video controls className="w-[465px] h-[300px]">
                      <source src="/videos/video1.mp4" type="video/mp4" />
                    </video>
                  </div>
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

export default videosId;
