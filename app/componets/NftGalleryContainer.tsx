import { FC } from "react";
import NFTGallery from "./NftGallery";
import { useAccount } from "wagmi";
import Image from "next/image";

import no_data_img from "@/public/assets/icons/nodata.png";

const NftGalleryContainer: FC = () => {
  const { isConnected } = useAccount();
  return (
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
  );
};

export default NftGalleryContainer;
