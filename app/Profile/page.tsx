"use client";
import Link from "next/link";
import React, { useState } from "react";
import Header from "../componets/Header";
import NFTGallery from "../componets/NftGallery";
import { useAccount } from "wagmi";
import Image from "next/image";

import no_data_img from "@/public/assets/icons/nodata.png";

function page() {
  // const { isConnected } = useAccount();
  const [isConnected, setIsConnected] = useState(false);
  return (
    <>
      <Header />
      {/* <Link href="/" className=" text-white text-2xl flex flex-col items-center">Coming Soon</Link> */}
      <div className="w-full h-full flex justify-center items-center">
        {isConnected ? (
          <NFTGallery />
        ) : (
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <Image src={no_data_img.src} width={80} height={80} alt="No data" />
            <span className="text-white">
              You need to connect your wallet first
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default page;
