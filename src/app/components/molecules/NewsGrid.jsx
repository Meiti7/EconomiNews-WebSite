import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import PaperImg from "../../../../public/img/Paper1.png";
import TradeImg from "../../../../public/img/trade.png";
import BoardImg from "../../../../public/img/Board.png";
import GirlImg from "../../../../public/img/Girl.png";
import LowImg from "../../../../public/img/Low.png";
import SaveIcon from "../atoms/SaveIcon";

function NewsGrid() {
  return (
    <div className="grid pt-6 grid-cols-3 gap-6 border-t-gray-300 border-t ">
      <div className="flex flex-col gap-4 max-w-[300px]">
        <Link href="/news">
          <div className="flex justify-between items-center">
            <h2>Full Tag Title</h2>
            <FaAngleRight />
          </div>
        </Link>
        <div>
          <Image src={PaperImg} alt="paper" />
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
            Title of the featured news
          </h3>
          <SaveIcon />
          </div>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
          Title of the featured news from this tag goes her
          </h3>
          <SaveIcon />
          </div>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
          Title of the featured news from this tag goes her
          </h3>
          <SaveIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-[300px]">
        <Link href="/news">
          <div className="flex justify-between items-center">
            <h2>Full Tag Title</h2>
            <FaAngleRight />
          </div>
        </Link>
        <div>
          <Image src={TradeImg} alt="trade"/>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
            Title of the featured news
          </h3>
          <SaveIcon />
          </div>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
          Title of the featured news from this tag goes her
          </h3>
          <SaveIcon />
          </div>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
          Title of the featured news from this tag goes her
          </h3>
          <SaveIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-[300px]">
        <Link href="/news">
          <div className="flex justify-between items-center">
            <h2>Full Tag Title</h2>
            <FaAngleRight />
          </div>
        </Link>
        <div>
          <Image src={BoardImg} alt="board"/>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
            Title of the featured news
          </h3>
          <SaveIcon />
          </div>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
          Title of the featured news from this tag goes her
          </h3>
          <SaveIcon />
          </div>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
          Title of the featured news from this tag goes her
          </h3>
          <SaveIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-[300px]">
        <Link href="/news">
          <div className="flex justify-between items-center">
            <h2>Full Tag Title</h2>
            <FaAngleRight />
          </div>
        </Link>
        <div>
          <Image src={GirlImg} alt="girl"/>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
            Title of the featured news
          </h3>
          <SaveIcon />
          </div>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
          Title of the featured news from this tag goes her
          </h3>
          <SaveIcon />
          </div>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
          Title of the featured news from this tag goes her
          </h3>
          <SaveIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-[300px]">
        <Link href="/news">
          <div className="flex justify-between items-center">
            <h2>Full Tag Title</h2>
            <FaAngleRight />
          </div>
        </Link>
        <div>
          <Image src={LowImg} alt="low"/>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
            Title of the featured news
          </h3>
          <SaveIcon />
          </div>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
          Title of the featured news from this tag goes her
          </h3>
          <SaveIcon />
          </div>
          <div className="mb-4">
          <h3 className="text-lg font-bold font-times">
          Title of the featured news from this tag goes her
          </h3>
          <SaveIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsGrid;
