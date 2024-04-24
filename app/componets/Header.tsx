"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

  const onViewMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <div className="flex justify-between items-center p-4 fixed top-0 left-0 w-full">
      <div className="ml-4 gap-4 flex items-center">
        <Image src="/avalanche-avax-logo.svg" width={56} height={56} alt="" />

        <Link href="/" className="text-white text-2xl">
          Pro Predictions
        </Link>
      </div>
      <div
        className={`mr-4 gap-6 max-sm:flex-col-reverse flex items-center max-[800px]:hidden`}
      >
        <h3 className="max-md:hidden p-1 bg-red-500 rounded-xl">Beta</h3>
        <Link href="/Leaderboard" className="text-white">
          Leaderboard
        </Link>
        <Link href="/Profile" className="text-white">
          Profile
        </Link>
        <Link href="/Tools" className="text-white">
          Tools
        </Link>
        <ConnectButton label="Connect" />
      </div>
      {visibleMenu && (
        <div
          className={`hidden mr-4 gap-6 max-sm:flex-col-reverse items-center max-[800px]:flex max-[800px]:flex-col max-[800px]:fixed max-[800px]:top-[90px] max-[800px]:right-0 max-[800px]:bg-black max-[800px]:rounded-[10px] max-[800px]:p-4`}
        >
          <h3 className="p-1 bg-red-500 rounded-xl max-[800px]:hidden">Beta</h3>
          <Link href="/Leaderboard" className="text-white">
            Leaderboard
          </Link>
          <Link href="/Profile" className="text-white">
            Profile
          </Link>
          <Link href="/Tools" className="text-white">
            Tools
          </Link>
          <ConnectButton label="Connect" />
        </div>
      )}
      <div
        className="mr-4 hidden max-[800px]:block hover:opacity-80 hover:cursor-pointer"
        onClick={onViewMenu}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2 23.8H21.7C22.257 23.8 22.7911 23.5787 23.1849 23.1849C23.5788 22.7911 23.8 22.257 23.8 21.7V20.3C23.8 19.743 23.5788 19.2089 23.1849 18.8151C22.7911 18.4212 22.257 18.2 21.7 18.2H11.2V23.8ZM11.2 16.8H21.7C22.257 16.8 22.7911 16.5787 23.1849 16.1849C23.5788 15.7911 23.8 15.257 23.8 14.7V13.3C23.8 12.743 23.5788 12.2089 23.1849 11.8151C22.7911 11.4212 22.257 11.2 21.7 11.2H11.2V16.8ZM9.80001 11.2V16.8H6.30001C5.74306 16.8 5.20891 16.5787 4.81509 16.1849C4.42126 15.7911 4.20001 15.257 4.20001 14.7V13.3C4.20001 12.743 4.42126 12.2089 4.81509 11.8151C5.20891 11.4212 5.74306 11.2 6.30001 11.2H9.80001ZM11.2 9.8H21.7C22.257 9.8 22.7911 9.57875 23.1849 9.18492C23.5788 8.7911 23.8 8.25695 23.8 7.7V6.3C23.8 5.74304 23.5788 5.2089 23.1849 4.81507C22.7911 4.42125 22.257 4.2 21.7 4.2H11.2V9.8ZM9.80001 4.2V9.8H6.30001C5.74306 9.8 5.20891 9.57875 4.81509 9.18492C4.42126 8.7911 4.20001 8.25695 4.20001 7.7V6.3C4.20001 5.74304 4.42126 5.2089 4.81509 4.81507C5.20891 4.42125 5.74306 4.2 6.30001 4.2H9.80001ZM9.80001 18.2V23.8H6.30001C5.74306 23.8 5.20891 23.5787 4.81509 23.1849C4.42126 22.7911 4.20001 22.257 4.20001 21.7V20.3C4.20001 19.743 4.42126 19.2089 4.81509 18.8151C5.20891 18.4212 5.74306 18.2 6.30001 18.2H9.80001Z"
            fill="#EDEDED"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
