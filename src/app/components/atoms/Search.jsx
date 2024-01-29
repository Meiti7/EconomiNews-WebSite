// components/NotificationIcon.js
"use client";
// components/NotificationIcon.js
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");
};
const handleSearch = () => {
  // اینجا می‌توانید کدی برای انجام جستجو اضافه کنید، مثلا ارسال درخواست به سرور
  console.log();
};
function Search() {
  return (
    <div className="flex items-center font-light pr-2 border-2 border-[#EFEFEF] rounded-md">
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
        className="text-black font-light pl-3 py-2"
      />
      <AiOutlineSearch
        onClick={handleSearch}
        style={{ width: "20px", height: "20px" }}
        
      />
    </div>
  );
}

export default Search;
