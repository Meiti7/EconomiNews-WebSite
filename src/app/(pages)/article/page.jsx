import React from "react";
import Link from "next/link";
import Image from "next/image";
import Submenu from "../../components/molecules/Submenu";
import BusinessImg from "../../../../public/img/Business.png";
import LikeIcon from "../../components/atoms/LikeIcon";
import ShareIcon from "../../components/atoms/ShareIcon";
import SaveComponent from "../../components/atoms/SaveComponent";
import FollowButton from "../../components/atoms/Follow";
import Profile from "../../components/atoms/Profile";
import SuggestedNews from "../../../../public/img/SuggestedNews.png";
import SuggestedNews1 from "../../../../public/img/SuggestedNews1.png";
import SuggestedNews2 from "../../../../public/img/SuggestedNews2.png";
import SuggestedNews3 from "../../../../public/img/SuggestedNews3.png";
import SaveIcon from "../../components/atoms/SaveIcon";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import Line from "../../../../public/icons/Line.svg";
function article() {
  return (
    <div className="font-roboto flex flex-col gap-6">
      <Submenu />
      <main className="flex justify-center gap-5 ">
        <div className="flex flex-col gap-6">
          <Image src={BusinessImg} alt="news" width={1280} height={538} />
          <div className="flex flex-col gap-3 max-w-[950px] mx-auto">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-normal font-times">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="font-roboto text-sm font-light leading-5 max-w-[624px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <LikeIcon />
          <SaveComponent />
          <ShareIcon />
        </div>
      </div>
      <div className="flex justify-start items-center gap-6">
        <div className="flex justify-between items-center gap-1">
          <p>Category</p>
          <FollowButton />
        </div>
        <div className="flex justify-between items-center gap-1">
          <Profile />
          <FollowButton />
        </div>
      </div>
      <div className="flex gap-1">
        <p className="text-xs font-roboto">May 18,2023 9:49am ET | </p>
        <div className="flex items-center gap-1">
          <MdOutlineAccessTime className="text-sm" />
          <p className="text-[12px] font-light">4 Min to Read</p>
        </div>
      </div>
      <p className="text-sm font-light leading-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae 
      congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed 
      euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis 
      pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. 
      Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit
       tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.
      </p>
      <p className="text-sm font-light leading-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae 
      congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed 
      euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis 
      pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. 
      Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit
       tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.
      </p>
      <h2 className="text-lg font-extrabold">Lorem ipsum dolor sit amet</h2>
      <p className="text-sm font-light leading-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae 
      congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed 
      euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis 
      pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. 
      Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit
       tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.
      </p>
      <p className="text-[12px] font-light">Source : <span className="font-"><Link href="/">Economician.com</Link></span></p>
      <div className="flex gap-3">
       <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
       <Link href="*">بیت کوین</Link>
       </div>
       <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
       <Link href="*">رمز ارز</Link>
       </div>
       <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
       <Link href="*">طلا</Link>
       </div>
       <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
       <Link href="*">طلا</Link>
       </div>
       <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
       <Link href="*">دلار</Link>
       </div>
       <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
       <Link href="*">بستنی</Link>
       </div>
       <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
       <Link href="*">...</Link>
       </div>
      </div>
    </div>

          <div className="flex flex-col justify-center items-center gap-6 mb-12">
            <div className="flex justify-center items-center gap-6 font-roboto">
              <div className="text-lg font-medium">Suggested News</div>

              <div>
                <Image src={Line} className="w-[700px]" alt="news"/>
              </div>
              <Link href="/News">
                <div className="flex items-center cursor-pointer mb-2 text-[16px] font-light">
                  See More
                  <span>
                    <FaAngleRight className="font-bold" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3 ">
                <Link href="/news">
                  <Image src={SuggestedNews} alt="news" />
                  <div className="flex justify-start gap-2">
                    <h2 className="text-lg font-bold font-times">
                      Title of the Suggested News
                    </h2>
                    <SaveIcon />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <Link href="/news">
                  <Image src={SuggestedNews1} alt="news" />
                  <div className="flex justify-start gap-2">
                    <h2 className="text-lg font-bold font-times">
                      Title of the Suggested News
                    </h2>
                    <SaveIcon />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/news">
                  <Image src={SuggestedNews2} alt="news" />
                  <div className="flex justify-start gap-2">
                    <h2 className="text-lg font-bold font-times">
                      Title of the Suggested News
                    </h2>
                    <SaveIcon />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/news">
                  <Image src={SuggestedNews3} alt="news" />
                  <div className="flex justify-start gap-2">
                    <h2 className="text-lg font-bold font-times">
                      Title of the Suggested News
                    </h2>
                    <SaveIcon />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

      
      </main>
    </div>
  );
}

export default article;
