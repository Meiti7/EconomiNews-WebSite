import React from "react";
import Link from "next/link";
import Image from "next/image";
import Banner from "../../../../public/img/banner.png";
import Banner1 from "../../../../public/img/banner1.png";
import Banner2 from "../../../../public/img/banner2.png";

function SuggestedBrokers() {
  return (
    <div className="flex flex-col gap-3 ">
      <label className="text-lg font-medium px-6">SuggestedBrokers</label>
      <Link href="/suggestedBrokers">
        <Image src={Banner} alt="news" />
      </Link>
      <Link href="/suggestedBrokers">
        <Image src={Banner1} alt="news" />
      </Link>
      <Link href="/suggestedBrokers">
        <Image src={Banner2} alt="news" />
      </Link>
    </div>
  );
}

export default SuggestedBrokers;
