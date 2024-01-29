"use client";
import React, { useState } from "react";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

const SaveComponent = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
  
    setIsSaved(!isSaved);
  };

  return (
    <div onClick={handleSaveClick} style={{ cursor: "pointer" }}>
      {isSaved ? (
        <TurnedInIcon style={{ color: "#126C46", fontSize: "24px" }} />
      ) : (
        <TurnedInNotIcon style={{ fontSize: "24px" }} />
      )}
    </div>
  );
};

export default SaveComponent;
