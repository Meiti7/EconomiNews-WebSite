import Link from "next/link";
import React from "react";
import Image from "next/image";
import Edu from "../../../../public/img/Edu.png";
import Edu1 from "../../../../public/img/Edu1.png";
import Edu2 from "../../../../public/img/Edu2.png";
import Edu3 from "../../../../public/img/Edu3.png";
import Edu4 from "../../../../public/img/Edu4.png";
function RelatedEduWebinar() {
  return (
    <div className=" border border-[#EFEFEF] p-6 flex flex-col gap-3">
      <label className="text-lg font-medium">Related Edu Webinar</label>
      <div className="flex flex-col gap-3">
        <Link href="/">
          <div className="flex gap-2 items-center justify-center">
            <Image src={Edu} alt="news" />
            <div className=" text-[12px] font-light">
              <p className="font-times text-lg font-bold">
                Title of the Lesson
              </p>
              <div className="flex justify-between">
                <p>Webinar LVL</p>
                <p>22/12/11</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center justify-center">
            <Image src={Edu1} alt="news" />
            <div className=" text-[12px] font-light">
              <p className="font-times text-lg font-bold">
                Title of the Lesson
              </p>
              <div className="flex justify-between">
                <p>Webinar LVL</p>
                <p>22/12/11</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center justify-center">
            <Image src={Edu2} alt="news" />
            <div className=" text-[12px] font-light">
              <p className="font-times text-lg font-bold">
                Title of the Lesson
              </p>
              <div className="flex justify-between">
                <p>Webinar LVL</p>
                <p>22/12/11</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center justify-center">
            <Image src={Edu3} alt="news" />
            <div className=" text-[12px] font-light">
              <p className="font-times text-lg font-bold">
                Title of the Lesson
              </p>
              <div className="flex justify-between">
                <p>Webinar LVL</p>
                <p>22/12/11</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center justify-center">
            <Image src={Edu4} alt="news" />
            <div className=" text-[12px] font-light">
              <p className="font-times text-lg font-bold">
                Title of the Lesson
              </p>
              <div className="flex justify-between">
                <p>Webinar LVL</p>
                <p>22/12/11</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RelatedEduWebinar;
