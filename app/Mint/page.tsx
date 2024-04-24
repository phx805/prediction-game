"use client";
import React from "react";
import Header from "../componets/Header";
import Picks from "../componets/Picks";

function page() {
  return (
    <>
      <Header />
      {/* <Link href="/" className=" text-white text-2xl flex flex-col items-center">Coming Soon</Link> */}
      <Picks />
    </>
  );
}

export default page;
