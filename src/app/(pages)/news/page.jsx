// Import necessary modules and components
"use client";
import React, { Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "./newsData"; 
import ReactPaginate from "react-paginate";
import { FaAngleRight } from "react-icons/fa";
import Submenu from "../../components/molecules/Submenu";
import Banner from "../../../../public/img/banner-main.png";
import FilterBtn from "../../components/atoms/FilterBtn";
import SortBtn from "../../components/atoms/SortBtn";
import Search from "../../components/atoms/Search";
import Loading from "../../loading"
import Side from "./Side";
import "./newsData.css"



// News component definition
function News({ params }) {
  // Set the number of items per page
  const itemsPerPage = 7;
  
  // Initialize state for the current page
  const [currentPage, setCurrentPage] = useState(0);
  
  // Calculate the offset based on the current page and items per page
  const offset = currentPage * itemsPerPage;
  
  // Extract the current data to be displayed on the current page
  const currentNewsData = newsData.slice(offset, offset + itemsPerPage);
  
  // Calculate the total number of pages needed for pagination
  const pageCount = Math.ceil(newsData.length / itemsPerPage);
  
  // Function to handle page clicks and update the current page
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div className="font-roboto flex flex-col gap-6">
      {/* Display Submenu */}
      <Submenu />

      {/* Main content */}
      <main className="flex flex-col justify-between max-w-[1280px] mx-auto gap-6">
        {/* Link to homepage with a banner image */}
        <Link href="/">
          <Suspense fallback={<Loading />} />
          <Image src={Banner} alt="news" />
        </Link>

        {/* News content */}
        <div className="flex justify-between gap-6">
          <div className="flex flex-col gap-6 mb-12">
            {/* Sort and filter options */}
            <div className="flex justify-between items-center gap-[450px]">
              <div className="flex gap-6">
                <SortBtn />
                <FilterBtn />
              </div>
              <Search />
            </div>

            {/* Display current page data */}
            {currentNewsData.map((news) => (
              <div key={news.id} className="flex gap-3 items-center max-w-[980px]">
                {/* Display news image */}
                <Image src={news.src} alt="news" width={466} height={271}  />

                {/* Display news details */}
                <div className="flex flex-col gap-3 max-w-[470px]">
                  <h2 className="text-xl font-times font-bold ">{news.title}</h2>
                  <p className="text-sm font-light leading-5">{news.content}</p>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-light leading-5">{news.author}</p>
                      <p className="text-sm font-light leading-5">{news.date}</p>
                    </div>
                    <div>
                      {/* Link to the news details page */}
                      <Link href={`/news/${news.id}`} className="flex items-center text-sm font-medium">
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

            {/* Pagination component */}
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

          {/* Display side component */}
          <Side />
        </div>
      </main>
    </div>
  );
}

// Export the News component
export default News;
