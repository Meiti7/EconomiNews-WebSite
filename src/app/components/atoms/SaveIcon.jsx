"use client";
import React, { useState } from "react";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { MdOutlineAccessTime } from "react-icons/md";
const SaveIcon = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
   
    setIsSaved(!isSaved);
  };

  return (
    <div className="flex items-center gap-1">
    <div onClick={handleSaveClick} style={{ cursor: "pointer" }}>
      {isSaved ? (
        <TurnedInIcon style={{ color: "#126C46", fontSize: "16px" }} />
      ) : (
        <TurnedInNotIcon style={{ fontSize: "16px" }} />
      )}
    </div>
       <MdOutlineAccessTime className="text-sm" />
       <p className="text-[12px]">4 Min to Read</p>
     </div>
  );
};

export default SaveIcon;
