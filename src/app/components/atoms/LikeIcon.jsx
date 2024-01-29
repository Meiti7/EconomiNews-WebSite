"use client";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import React, { useState } from "react";

function LikeIcon() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    // تغییر وضعیت liked به صورت معکوس (true به false و بالعکس)
    setLiked(!liked);

    // ارسال درخواست به سرور (این قسمت را با لاگیک واقعی تغییر دهید)
    if (!liked) {
      // درخواست برای لایک کردن
      console.log("ارسال درخواست برای لایک کردن");
    } else {
      // درخواست برای حذف لایک
      console.log("ارسال درخواست برای حذف لایک");
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      {liked ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24}/>}
    </div>
  );
}

export default LikeIcon;
