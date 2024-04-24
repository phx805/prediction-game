import Picks from "./componets/Picks";
import Landing from "./componets/Landing";
import Header from "./componets/Header";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Image from "next/image";

import apexImg from "@/public/assets/imgs/apex2.png";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center w-full h-full px-4 pb-8 bg">
        <Landing />
        <Image
          alt="apex image"
          src={apexImg.src}
          width={apexImg.width}
          height={apexImg.height}
          className="w-[40%] max-[768px]:hidden"
        />
        {/* <Picks /> */}
      </div>
      <ToastContainer position="top-right" />
    </>
  );
}
