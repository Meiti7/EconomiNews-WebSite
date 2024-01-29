"use client";
import { useState, useEffect } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";

const Crypto = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // تعریف کلیک‌هندلر برای بدنه صفحه
    const handleClickOutside = (event) => {
      const menuNode = document.getElementById("more-menu");

      // اگر کلیک خارج از منو باشد و منو باز باشد، آن را ببند
      if (menuNode && !menuNode.contains(event.target) && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    // اضافه کردن کلیک‌هندلر به بدنه صفحه
    document.addEventListener("click", handleClickOutside);

    // حذف کلیک‌هندلر در هنگام از بین رفتن کامپوننت
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative group" id="more-menu">
      <button
        onClick={toggleMenu}
        className="focus:outline-none flex items-center"
      >
        <p className="text-[16px] font-light">
          Crypto
        </p>

        <span className="ml-1">
          {isMenuOpen ? (
            <FaAngleDown className="self-center text-sm text-black font-light " />
          ) : (
            <FaAngleRight className="text-black  text-sm font-light " />
          )}
        </span>
      </button>
      {isMenuOpen && (
        <div className="absolute pl-4 py-2 z-10 bg-white w-[150px] mt-2 origin-top-right rounded-md shadow-lg">
          <div>
            <Link href="/about">About Us</Link>
          </div>
          <div>
            <Link href="/jobs">Jobs</Link>
          </div>
          <div>
            <Link href="/faq">FAQ</Link>
          </div>
          <div>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Crypto;
