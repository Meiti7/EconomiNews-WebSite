import React from "react";

function Hover() {
  return (
    <>
       
      <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all group-active:w-1/2 group-active:transition-all group-focus:w-1/2 group-focus:transition-all "></span>
      <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all group-active:w-1/2 group-active:transition-all group-focus:w-1/2 group-focus:transition-all  "></span>
    </>
  );
}

export default Hover;
