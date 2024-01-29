import React from "react";
import Link from "next/link";
import LikeIcon from "../atoms/LikeIcon";
import ShareIcon from "../atoms/ShareIcon";
import SaveComponent from "../atoms/SaveComponent";
import FollowButton from "../atoms/Follow";
import Profile from "../atoms/Profile";
import { MdOutlineAccessTime } from "react-icons/md";
function TextContent() {
  return (
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
  );
}

export default TextContent;
