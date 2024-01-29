import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <div className="font-inter">
      <Link href="/">
        <span className="text-2xl font-medium leading-normal">ECONOMICIAN</span>
      </Link>
    </div>
  );
}

export default Logo;
