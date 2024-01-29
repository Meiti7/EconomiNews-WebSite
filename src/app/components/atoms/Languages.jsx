"use client";
import { useState, useEffect, useRef } from "react";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import Image from "next/image";
import FlagEn from "../../../../public/icons/enflag.svg";
import FlagA from "../../../../public/icons/flag.svg";
import FlagIr from "../../../../public/icons/irflag.svg";
import FlagEs from "../../../../public/icons/sflag.svg";
import FlagF from "../../../../public/icons/fflag.svg";

function Languages() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    label: "English",
    icon: <Image src={FlagEn} alt="Flag" width={30} height={30} />,
  });

  const options = [
    {
      label: "English",
      icon: <Image src={FlagEn} alt="Flag" width={30} height={30} />,
    },
    {
      label: "العربیه",
      icon: <Image src={FlagA} alt="Flag" width={30} height={30} />,
    },
    {
      label: "فارسی",
      icon: <Image src={FlagIr} alt="Flag" width={30} height={30} />,
    },
    {
      label: "Spanish",
      icon: <Image src={FlagEs} alt="Flag" width={30} height={30} />,
    },
    {
      label: "Française",
      icon: <Image src={FlagF} alt="Flag" width={30} height={30} />,
    },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <div className="flex items-center">
        <button
          type="button"
          className="inline-flex justify-center w-full gap-6  font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? (
            <span className="flex items-center">
              <span className="ml-2">
  {selectedOption.icon}
</span>
              {isOpen ? <FaAngleDown className="gap-[3px] self-center text-sm text-black font-light"/> 
              : <FaAngleRight className="gap-[3px] self-center text-sm text-black font-light"/>}
            </span>
          ) : (
            ""
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 origin-top-right rounded-md shadow-lg">
          <div className="flex justify-center items-center w-36 bg-white">
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleOptionClick(option)}
                  className=" px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:w-full hover:text-gray-900 flex items-center"
                  role="menuitem"
                >
                  {option.icon}
                  <span className="ml-2 text-[16px]">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Languages;

