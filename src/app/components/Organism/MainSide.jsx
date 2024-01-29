import React from "react";
import SocialMedia from "../molecules/SocialMedia";
import PopularNews from "../molecules/PopularNews";
import SuggestedBrokers from "../molecules/SuggestedBrokers";
import RelatedEduWebinar from "../molecules/RelatedEduWebinar";
function MainSide() {
  return (
    <div className="max-w-[304px] flex flex-col gap-6">
      <SocialMedia />
      <PopularNews />
      <SuggestedBrokers />
      <RelatedEduWebinar />
    </div>
  );
}

export default MainSide;
