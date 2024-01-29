import React from "react";
import Logo from "../atoms/Logo";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-t-[#EFEFEF]">
      <div className="py-6 px-20">
        <div className="flex flex-col gap-16 mx-auto max-w-[1280px]">
          <div className="flex  justify-between items-center gap-8 ">
            <div className="flex flex-col gap-3 items-start justify-start">
              <h2 className="text-[32px] font-medium leading-7 ">
                ECONOMICIAN
              </h2>
              <p className="text-sm font-light leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua. Egestas purus viverra <br /> accumsan in nisl nisi.
              </p>
              <p className="text-sm font-light leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua. Egestas purus viverra <br /> accumsan in nisl nisi.
              </p>
            </div>
            <div className="flex gap-8 items-start">
              <div>
                <h3 className="mb-6 text-[18px] font-medium leading-normal">
                  Heading
                </h3>
                <div className="flex flex-col gap-[18px]">
                  <Link href="/" className="text-black">
                    Lorem Ipsum
                  </Link>
                  <Link href="/" className="text-black">
                    Lorem Ipsum
                  </Link>
                  <Link href="/" className="text-black">
                    Lorem Ipsum
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="mb-6 text-[18px] font-medium leading-normal">
                  Heading
                </h3>
                <div className="flex flex-col gap-[18px]">
                  <Link href="/" className="text-black">
                    Lorem Ipsum
                  </Link>
                  <Link href="/" className="text-black">
                    Lorem Ipsum
                  </Link>
                  <Link href="/" className="text-black">
                    Lorem Ipsum
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="mb-6 text-[18px] font-medium leading-normal">
                  Heading
                </h3>
                <div className="flex flex-col gap-[18px]">
                  <Link href="/" className="text-black">
                    Lorem Ipsum
                  </Link>
                  <Link href="/" className="text-black">
                    Lorem Ipsum
                  </Link>
                  <Link href="/" className="text-black">
                    Lorem Ipsum
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="justify-start text-sm font-light leading-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex gap-6">
              <Link
                href="/"
                className="border p-[5px] border-dashed border-black text-[8px]"
              >
                icon
              </Link>
              <Link
                href="/"
                className="border p-[5px] border-dashed border-black text-[8px]"
              >
                icon
              </Link>
              <Link
                href="/"
                className="border p-[5px] border-dashed border-black text-[8px]"
              >
                icon
              </Link>
              <Link
                href="/"
                className="border p-[5px] border-dashed border-black text-[8px]"
              >
                icon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
