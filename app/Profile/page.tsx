"use client";
import Link from "next/link";
import React from "react";
import Header from "../componets/Header";
import NFTGallery from "../componets/NftGallery";

function page() {
  return (
    <>
      <Header />
      {/* <Link href="/" className=" text-white text-2xl flex flex-col items-center">Coming Soon</Link> */}
      <NFTGallery />
    </>
  );
}

export default page;
