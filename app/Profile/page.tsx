"use client";
import React from "react";
import Header from "../componets/Header";
import NftGalleryContainer from "../componets/NftGalleryContainer";

function page() {
  return (
    <>
      <Header />
      {/* <Link href="/" className=" text-white text-2xl flex flex-col items-center">Coming Soon</Link> */}
      <NftGalleryContainer />
    </>
  );
}

export default page;
