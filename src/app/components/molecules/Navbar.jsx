import React from "react";
import Link from "next/link";
import Logo from "../atoms/Logo";
import Languages from "../atoms/Languages";
import MoreMenu from "../molecules/MoreMenu";
import Hover from "../atoms/Hover";

function Navbar() {
  return (
    <div className="py-6 border-b border-b-[#EFEFEF]">
      <div className="flex max-w-[1278px] justify-between items-center mx-auto">
        <div className="flex items-center justify-evenly gap-6">
          <Languages />
          <div className="flex flex-wrap gap-6">
            <div className="relative group">
              <Link
                href="/news"
                className="text-[16px] font-light transform hover:font-normal active:font-normal focus:font-normal"
              >
                News
              </Link>
              <Hover />
            </div>
            <div className="relative group ">
              <Link
                href="/videos"
                className="text-[16px] font-light transform hover:font-normal"
              >
                Videos
              </Link>
              <Hover />
            </div>
            <div className="relative group ">
              <Link
                href="/article"
                className="text-[16px] font-light transform hover:font-normal"
              >
                Article
              </Link>
              <Hover />
            </div>
            <div className="relative group ">
              <Link
                href="/podcast"
                className="text-[16px] font-light transform hover:font-normal"
              >
                Podcast
              </Link>
              <Hover />
            </div>
            <div className="relative group ">
              <Link
                href="/analysis"
                className="text-[16px] font-light transform hover:font-normal"
              >
                Analysis
              </Link>
              <Hover />
            </div>
            <div className="relative group ">
              <Link
                href="/education"
                className="text-[16px] font-light transform hover:font-normal"
              >
                Education
              </Link>
              <Hover />
            </div>
            <div className="relative group ">
              <Link
                href="/webinars"
                className="text-[16px] font-light transform hover:font-normal"
              >
                Webinars
              </Link>
              <Hover />
            </div>
            <div className="relative group ">
              <Link
                href="/brokers"
                className="text-[16px] font-light transform hover:font-normal"
              >
                Brokers
              </Link>
              <Hover />
            </div>
            <div className="relative group ">
              <Link
                href="/specialCoverage"
                className="text-[16px] font-light transform hover:font-normal"
              >
                Special Coverage
              </Link>
              <Hover />
            </div>
            <MoreMenu />
          </div>
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
