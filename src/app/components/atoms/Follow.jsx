"use client";
import React, { useState } from "react";

function FollowButton() {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowClick = () => {
    setIsFollowed(!isFollowed);
    console.log("Followed");
  };

  return (
    <button
      onClick={handleFollowClick}
      style={{
        backgroundColor: isFollowed ? "#126C46" : "transparent",
        color: isFollowed ? "#fff" : "#126C46",
        border: "1px solid #126C46",
        padding: "2px 8px",
        cursor: "pointer",
      }}
    >
      {isFollowed ? "Following" : "Follow"}
    </button>
  );
}

export default FollowButton;
