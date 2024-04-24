"use client";

import Image from "next/image";
import Button from "./basic/Button";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { toast } from "react-toastify";

function Landing() {
  const { isConnected } = useAccount();
  const router = useRouter();
  const playHandler = () => {
    if (isConnected) router.push("/Mint");
    else toast.warning("Please connect your wallet.");
  };
  return (
    <main className="flex flex-col items-left gap-8 justify-start px-4 max-[1024px]:gap-4 max-[425px]:items-center">
      <Image
        src="/assets/imgs/apex1.png"
        width={250}
        height={168}
        alt="Picture of the author"
        objectFit="cover"
      />
      <h1 className="italic text-white max-[1024px]:text-[32px] text-[44px] text-left max-[425px]:text-[24px] max-[375px]:text-[20px]">
        Tournament Predictions
      </h1>
      <div className="max-w-3xl">
        <h2 className="text-xl text-white text-left max-[1024px]:text-[16px] max-[425px]:text-center max-[425px]:text-[14px]">
          Welcome Apex Legends to the first ALGS Prediction Game. Play along
          with the community by picking your Top Six Placements for a
          Tournament. Earn points for correct Predictions and Win the Prize
          Pool!
        </h2>
      </div>
      {/* {isConnected ? (
        <Button text="Play" onClick={playHandler} />
      ) : (
        <div className="button">
        <ConnectButton label="Play" />
        </div>
      )} */}
      <Button text="Play" onClick={playHandler} />
    </main>
  );
}

export default Landing;
