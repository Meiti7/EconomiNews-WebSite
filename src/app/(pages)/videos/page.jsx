"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Side from "./Side";
import Submenu from "../../components/molecules/Submenu";
import Image from "next/image";
import Link from "next/link";
import SortBtn from "../../components/atoms/SortBtn";
import FilterBtn from "../../components/atoms/FilterBtn";
import Search from "../../components/atoms/Search";
import { FaAngleRight } from "react-icons/fa";
import { videosData } from "./videosData";
import "./videosData.css"


function Videos() {
  const itemsPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * itemsPerPage;
  const currentvideosData =  videosData.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil( videosData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="font-roboto flex flex-col gap-6">
      <Submenu />
      <main className="flex flex-col justify-between max-w-[1280px] mx-auto gap-6">
        <div className="flex justify-between gap-6">
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex justify-between items-center gap-[450px]">
              <div className="flex gap-6">
                <SortBtn />
                <FilterBtn />
              </div>
              <Search />
            </div>

            {currentvideosData.map((videos) => (
              <div
                key={videos.id}
                className="flex gap-3 items-center max-w-[980px]"
              >
                <Image src={videos.src} alt="news" width={466} height={271} />
                <div className="flex flex-col gap-3 max-w-[470px]">
                  <h2 className="text-xl font-times font-bold ">
                    {videos.title}
                  </h2>
                  <p className="text-sm font-light leading-5">{videos.content}</p>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-light leading-5">
                        {videos.author}
                      </p>
                      <p className="text-sm font-light leading-5">
                        {videos.date}
                      </p>
                    </div>
                    <div>
                      <Link
                        href="/news"
                        className="flex items-center text-sm font-medium"
                      >
                        ReadMore
                        <span>
                          <FaAngleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
 <div className="flex justify-center mt-4">
             
             <ReactPaginate
               previousLabel={"< Previous"}
               nextLabel={"Next >"}
               breakLabel={"..."}
               breakClassName={"break-me"}
               pageCount={pageCount}
               pageRangeDisplayed={5}
               onPageChange={handlePageClick}
               containerClassName={"paginationBtn"}
               nextLinkClassName={"nextBtn"}
               previousLinkClassName={"previousBtn"}
               activeClassName={"paginateActive"}
               disabledClassName={"paginateDisabled"}
             />
           </div>

          </div>

          <Side />
        </div>
      </main>
    </div>
  );
}

export default Videos;
