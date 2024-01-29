import Image from "next/image";
import React from "react";
import SuggestedImage from "../../../../../public/img/Suggested.png";
import EventImage from "../../../../../public/img/Event.png";
import ChartImage from "../../../../../public/img/Chart.png";
import PaperImage from "../../../../../public/img/Paper.png";

import SaveIcon from "../SaveIcon";

function Suggested() {
  return (
    <div className="flex justify-center gap-6">
      <div className="flex flex-col gap-3 max-w-[850px]">
        <Image
          src={SuggestedImage}
          alt="Title Of Image"
          className="cursor-pointer mb-3"
        />
        <h2 className="font-times text-lg font-bold mb-3 ">
          Title of the Suggested News
        </h2>
        <p className="line-clamp-2  text-sm font-light leading-5 font-roboto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi.
        </p>

        <SaveIcon />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <Image src={ChartImage} alt="chart" />
          <div className="flex justify-start gap-2">
            <p className="font-times text-lg font-bold">
              Title of the Suggested News
            </p>
            <SaveIcon />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Image src={EventImage} alt="chart" />
          <div className="flex justify-start gap-2">
            <p className="font-times text-lg font-bold">
              Title of the Suggested News
            </p>
            <SaveIcon />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Image src={PaperImage} alt="chart" />
          <div className="flex justify-start gap-2">
            <p className="font-times text-lg font-bold">
              Title of the Suggested News
            </p>
            <SaveIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggested;
