import React from "react";
import SocialMedia from "../../components/molecules/SocialMedia";
import PopularNews from "../../components/molecules/PopularNews";
import Image from "next/image";
import Link from "next/link";
import FrameImg from "../../../../public/img/Frame.png";
import PopularVideos from "../../components/molecules/PopularVideos";
function Side() {
  return (
    <div className="max-w-[304px] flex flex-col gap-6">
      <Link href="/news">
        <Image src={FrameImg} alt="" width={304} height={304} />
      </Link>
      <PopularVideos />
      <SocialMedia />
      <PopularNews />
    </div>
  );
}

export default Side;
