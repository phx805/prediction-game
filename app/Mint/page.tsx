"use client";
import React, { useEffect } from "react";
import Header from "../componets/Header";
import Picks from "../componets/Picks";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

const page: React.FC = () => {
  const { isConnected } = useAccount();
  const router = useRouter();
  useEffect(() => {
    if (!isConnected) router.push("/");
  });
  return (
    <>
      <Header />
      {/* <Link href="/" className=" text-white text-2xl flex flex-col items-center">Coming Soon</Link> */}
      <Picks />
    </>
  );
}

export default page;
