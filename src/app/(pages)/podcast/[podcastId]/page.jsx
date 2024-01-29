import React from "react";
import Link from "next/link";
import Image from "next/image";
import Side from "../Side";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import Submenu from "../Submenu";
import LikeIcon from "../../../components/atoms/LikeIcon";
import ShareIcon from "../../../components/atoms/ShareIcon";
import SaveComponent from "../../../components/atoms/SaveComponent";
import FollowButton from "../../../components/atoms/Follow";
import Profile from "../../../components/atoms/Profile";
import Line from "../../../../../public/icons/Line.svg";
import SaveIcon from "../../../components/atoms/SaveIcon";
import PodcastImg from "../../../../../public/img/Podcast.png";
import Musicplayer from "../../../components/atoms/Musicplayer";

function podcastId({ params }) {
  return (
    <div className="font-roboto flex flex-col gap-6">
      <Submenu />
      <main className="flex justify-center gap-5 ">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 max-w-[950px] mx-auto">
            <div className="flex gap-3">
              <Image src={PodcastImg} width={160} height={160} />
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-[400px]">
                  <div>
                    <h2 className="text-2xl font-normal font-times">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p className="font-roboto text-sm font-light leading-5 max-w-[624px]">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <LikeIcon />
                    <SaveComponent />
                    <ShareIcon />
                  </div>
                </div>
                <Musicplayer />
              </div>
            </div>
            <p className="font-roboto text-sm font-light leading-5 max-w-[624px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi.
            </p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi
              vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut
              tortor pretium viverra suspendisse potenti nullam. Et molestie ac
              feugiat sed lectus. Non nisi est sit amet facilisis magna.
              Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut
              enim blandit volutpat maecenas volutpat. Ornare lectus sit amet
              est placerat in egestas erat. Nisi vitae suscipit tellus mauris a
              diam maecenas sed. Placerat duis ultricies lacus sed turpis
              tincidunt id aliquet.
            </p>
            <p className="text-sm font-light leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi
              vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut
              tortor pretium viverra suspendisse potenti nullam. Et molestie ac
              feugiat sed lectus. Non nisi est sit amet facilisis magna.
              Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut
              enim blandit volutpat maecenas volutpat. Ornare lectus sit amet
              est placerat in egestas erat. Nisi vitae suscipit tellus mauris a
              diam maecenas sed. Placerat duis ultricies lacus sed turpis
              tincidunt id aliquet.
            </p>
            <h2 className="text-lg font-extrabold">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="text-sm font-light leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi
              vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut
              tortor pretium viverra suspendisse potenti nullam. Et molestie ac
              feugiat sed lectus. Non nisi est sit amet facilisis magna.
              Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut
              enim blandit volutpat maecenas volutpat. Ornare lectus sit amet
              est placerat in egestas erat. Nisi vitae suscipit tellus mauris a
              diam maecenas sed. Placerat duis ultricies lacus sed turpis
              tincidunt id aliquet.
            </p>
            <p className="text-[12px] font-light">
              Source :{" "}
              <span className="font-">
                <Link href="/">Economician.com</Link>
              </span>
            </p>
            <div className="flex gap-3">
              <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
                <Link href="*">Tag</Link>
              </div>
              <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
                <Link href="*">Tag</Link>
              </div>
              <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
                <Link href="*">Tag</Link>
              </div>
              <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
                <Link href="*">Tag</Link>
              </div>
              <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
                <Link href="*">Tag</Link>
              </div>
              <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
                <Link href="*">Tag</Link>
              </div>
              <div className="px-6 py-2 cursor-pointer border rounded border-gray-300">
                <Link href="*">...</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex justify-center items-center gap-6 font-roboto">
              <div className="text-lg font-medium">Suggested Videos</div>

              <div>
                <Image src={Line} className="w-[700px]" />
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
                  <div>
                    <video controls className="w-[465px] h-[310px]">
                      <source src="/videos/video1.mp4" type="video/mp4" />
                    </video>
                  </div>
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
                  <div>
                    <video controls className="w-[465px] h-[310px]">
                      <source src="/videos/video1.mp4" type="video/mp4" />
                    </video>
                  </div>
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
                  <div>
                    <video controls className="w-[465px] h-[310px]">
                      <source src="/videos/video1.mp4" type="video/mp4" />
                    </video>
                  </div>
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
                  <div>
                    <video controls className="w-[465px] h-[310px]">
                      <source src="/videos/video1.mp4" type="video/mp4" />
                    </video>
                  </div>
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

        <Side />
      </main>
    </div>
  );
}

export default podcastId;
