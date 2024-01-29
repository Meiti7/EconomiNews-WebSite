import React from "react";
import SocialMedia from "../../components/molecules/SocialMedia";
import PopularNews from "../../components/molecules/PopularNews";
import Image from "next/image";
import Link from "next/link";
import FrameImg from "../../../../public/img/Frame.png";
import PopularVideos from "../../components/molecules/PopularVideos";
import SuggestedBrokers from "../../components/molecules/SuggestedBrokers";

function Side() {
  return (
    <div className="max-w-[304px] flex flex-col gap-6">
      <SuggestedBrokers />
      <PopularVideos />
      <PopularNews />
      <Link href="/videos">
        <Image src={FrameImg} />
      </Link>
    </div>
  );
}

export default Side;
