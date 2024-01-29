import React from "react";
import Link from "next/link";
import Search from "../../components/atoms/Search";
import Profile from "../../components/atoms/ProfileSetting";
import Notification from "../../components/atoms/NotificationIcon";



function Submenu() {
  return (
    <div className="py-3 border-b border-b-[#EFEFEF]">
      <div className="flex max-w-[1278px] justify-between items-center mx-auto">
        <div className="flex gap-5 text-[16px] font-light ">
          <Link href="/">Category1</Link>
          <Link href="/">Category2</Link>
          <Link href="/">Category3</Link>
          <Link href="/">Category4</Link>
         
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <Search />
          </div>
          <div className="mr-2">
            <Notification />
          </div>
          <Profile />
        </div>
      </div>
    </div>

    // <div className="flex justify-between py-3 border-b border-b-[#EFEFEF] ">
    //   <div className="flex justify-between items-center">
    //     <div className="flex justify-evenly">
    //       <div className="flex gap-5 text-[16px] font-light ">
    //         <Link href="/all">All</Link>
    //         <Link href="/economy">Economy</Link>
    //         <Link href="/forex">Forex</Link>
    //         <Link href="/polotic">Politic</Link>
    //         <div>
    //           <Stocks />
    //         </div>
    //         <div>
    //           <Crypto />
    //         </div>
    //         <div>
    //           <EconomicCalender />
    //         </div>
    //         <div>
    //           <More />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex items-center">
    //       <div className="mr-2">
    //         <Search />
    //       </div>
    //       <div className="mr-2">
    //         <Notification />
    //       </div>
    //       <Profile />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Submenu;
