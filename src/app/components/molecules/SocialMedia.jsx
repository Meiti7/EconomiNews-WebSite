import React from "react";
import Link from "next/link";
import Image from "next/image";
import YouTube from "../../../../public/icons/Youtube.png";
import Telegram from "../../../../public/icons/telegram.svg";
import Whatsapp from "../../../../public/icons/Whatsapp.png";
import Facebook from "../../../../public/icons/facebook.svg";
import Twitter from "../../../../public/icons/twitter.svg";
import Instagram from "../../../../public/icons/instagram.svg";
import Linkdin from "../../../../public/icons/linkdin.png";
import Club from "../../../../public/icons/club.png";
function SocialMedia() {
  return (
    <div className="border border-[#EFEFEF] ">
      <div className="flex flex-col p-6 gap-3">
        <label className="text-[16px] font-normal font-roboto">
          Our Socialmedia
        </label>
        <div className="grid grid-cols-4 items-center justify-center">
          <div className="p-2">
            <Link href="https://www.youtube.com">
              <Image src={YouTube} alt="YouTube Icon" />
            </Link>
          </div>
          <div className="p-2">
            <Link href="https://www.telegram.com">
              <Image src={Telegram} alt="Telegram Icon" />
            </Link>
          </div>
          <div className="p-2">
            <Link href="https://www.Whatsapp.com">
              <Image src={Whatsapp} alt="Whatsapp Icon" width={33.33} />
            </Link>
          </div>
          <div className="p-2">
            <Link href="https://www.facebook.com">
              <Image src={Facebook} alt="Facebook Icon" />
            </Link>
          </div>
          <div className="p-2">
            <Link href="https://www.twitter.com">
              <Image src={Twitter} alt="Twitter Icon" />
            </Link>
          </div>
          <div className="p-2">
            <Link href="https://www.Instagram.com">
              <Image src={Instagram} alt="Instagram Icon" />
            </Link>
          </div>
          <div className="p-2">
            <Link href="https://www.linkdin.com">
              <Image src={Linkdin} alt="Linkdin Icon" />
            </Link>
          </div>
          <div className="p-2">
            <Link href="https://www.Clubhouse.com">
              <Image src={Club} alt="Clubhouse Icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
