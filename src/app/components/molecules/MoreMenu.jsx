"use client"
import { useState, useEffect } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';

const MoreMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    
    const handleClickOutside = (event) => {
      const menuNode = document.getElementById('more-menu');

    
      if (menuNode && !menuNode.contains(event.target) && isMenuOpen) {
        setMenuOpen(false);
      }
    };


    document.addEventListener('click', handleClickOutside);


    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative group" id="more-menu">
      <button onClick={toggleMenu} className="focus:outline-none flex items-center">
      <div className="relative group ">
      <p className="text-[16px] font-light transform hover:font-normal">More</p>
      <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all hover:duration-3000"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all hover:duration-3000"></span>
    </div>
        <span className="ml-1">{isMenuOpen ? <FaAngleDown className="self-center text-sm text-black font-light "/> :
         <FaAngleRight className="text-black  text-sm font-light " />}</span>
      </button>
      {isMenuOpen && (
        <div className="absolute pl-4 py-2 z-10 w-[150px] bg-white mt-2 origin-top-right rounded-md shadow-lg">
         
          <div><Link href="/about">About Us</Link></div>
          <div><Link href="/jobs">Jobs</Link></div>
          <div><Link href="/faq">FAQ</Link></div>
          <div><Link href="/contact">Contact Us</Link></div>
      
        </div>
      )}
    </div>
  );
};

export default MoreMenu;
