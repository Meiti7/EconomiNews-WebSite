import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Line from "../../../../public/icons/Line.svg";
import Image from "next/image";
import SaveIcon from "../atoms/SaveIcon";
import NewsImg from "../../../../public/img/Newstand.png";
import NewsGrid from "./NewsGrid";
function NewsStand() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center items-center gap-6 font-roboto">
        <div className="text-lg font-medium">News Stand</div>

        <div>
          <Image src={Line} className="w-[700px] h-auto" alt="news" />
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

      <div className="grid grid-cols-3 gap-6">
        <div className="grid grid-cols-1 justify-start gap-2">
          <div>
            <h3 className="text-lg font-bold font-times">
              Title of the featured news
            </h3>
            <p className="w-[300px] text-sm font-light line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi.
            </p>
            <div className="flex gap-3 items-center">
              <p className="text-xs">subtitle</p>
              <SaveIcon />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold font-times">
              Title of the featured news
            </h3>
            <p className="w-[300px] text-sm font-light line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi.
            </p>
            <div className="flex gap-3 items-center font-times">
              <p className="text-xs">subtitle</p>
              <SaveIcon />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold font-times">
              Title of the featured news
            </h3>
            <p className="w-[300px] text-sm font-light line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi.
            </p>
            <div className="flex gap-3 items-center">
              <p className="text-xs">subtitle</p>
              <SaveIcon />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-start gap-2">
          <div>
            <Image src={NewsImg} alt="news" />
            <h3 className="text-lg font-bold font-times">
              Title of the featured news
            </h3>
            <p className="w-[300px] text-sm font-light line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi.
            </p>
            <div className="flex gap-3 items-center">
              <p className="text-xs">subtitle</p>
              <SaveIcon />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold font-times">
              Title of the featured news
            </h3>
            <p className="w-[300px] text-sm font-light line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi.
            </p>
            <div className="flex gap-3 items-center font-times">
              <p className="text-xs">subtitle</p>
              <SaveIcon />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-start gap-2">
          <div>
            <h3 className="text-lg font-bold font-times">
              Title of the featured news
            </h3>
            <p className="w-[300px] text-sm font-light line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi.
            </p>
            <div className="flex gap-3 items-center">
              <p className="text-xs">subtitle</p>
              <SaveIcon />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold font-times">
              Title of the featured news
            </h3>
            <p className="w-[300px] text-sm font-light line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi.
            </p>
            <div className="flex gap-3 items-center">
              <p className="text-xs">subtitle</p>
              <SaveIcon />
            </div>

          </div>
          <div>
            <h3 className="text-lg font-bold font-times">
              Title of the featured news
            </h3>
            <p className="w-[300px] text-sm font-light line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi.
            </p>
            <div className="flex gap-3 items-center">
              <p className="text-xs">subtitle</p>
              <SaveIcon />
            </div>
          </div>
        </div>
      </div>
      <NewsGrid />
    </div>
  );
}

export default NewsStand;
