import React from "react";
import Image from "next/image";
import ImageNews from "../../../../public/img/Image.png";
import ImageNewsTwo from "../../../../public/img/ImageNewstwo.png";
import Bitcoin from "../../../../public/img/Bitcoin.png";
import Report from "../../../../public/img/Report.png";

function HomepageStand() {
  return (
    <div className="flex gap-6  items-start justify-center font-times text-lg font-bold leading-normal max-w-[1280px] mx-auto">
      <div className="  flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-3 cursor-pointer">
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur !
          </p>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur !
          </p>
          <p>Title of the posts is going here!</p>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur !
          </p>
        </div>
        <div>
          <Image
            src={ImageNews}
            alt="Description of the image"
            className="cursor-pointer"
          />
          <p className="p-2 cursor-pointer">Lorem ipsum dolor sit amet,
            <br /> consectetur !</p>
        </div>
      </div>
      <div className="rounded-md items-center justify-center flex">
        <div className="cursor-pointer">
          <Image src={ImageNewsTwo} alt="Description of the image"  />
          <p className="p-2 cursor-pointer">Lorem ipsum dolor sit amet,
            <br /> consectetur !</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-6">
          <div>
            <Image src={Bitcoin} alt="Description of the image" className="cursor-pointer"/>

            <p className="p-2 cursor-pointer">Lorem ipsum dolor sit amet,
            <br /> consectetur !</p>
          </div>
          <div>
            <Image src={Report} alt="Description of the image" className="cursor-pointer" />
            <p className="p-2 cursor-pointer">Lorem ipsum dolor sit amet,
            <br /> consectetur !</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageStand;
