"use client";

import { useEffect, useState } from "react";
import { NftTokenContractBalanceItem } from "@covalenthq/client-sdk";
import { spanish } from "viem/accounts";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import ApiServices from "../lib/ApiServices";
import NftCard from "./NftCard";

interface nft {
  id: string;
  image_url: string;
  name: string;
  // Add other properties as needed
}

const NFTGallery = () => {
  const [nfts, setNfts] = useState<NftTokenContractBalanceItem[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const { address } = useAccount();

  // console.log("address: ", address);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        // const options = {
        //   method: "GET",
        //   headers: {
        //     accept: "application/json",
        //     "x-api-key": "0385bae12fb8424ba77995c3c73183ea",
        //   },
        // };

        // const response = await axios.get(
        //   "https://api.opensea.io/api/v2/chain/matic/contract/0x24A11e702CD90f034Ea44FaF1e180C0C654AC5d9/nfts/28318",
        //   options
        // );
        if (!address) return toast.error("The address is empty.");
        const response = await ApiServices(address);
        const nftItems = response?.items;
        // const data = await response.json();
        console.log(nftItems);
        setLoading(false);

        setNfts(nftItems);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchNFTs();
  }, [address]); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      {loading ? (
        <span className="text-white text-[24px]">Loading data...</span>
      ) : (
        <div className="flex flex-col p-8 gap-3 w-full h-full">
          <h1 className="mt-20 text-white text-[24px]">Your NFT Gallery</h1>
          <div className="flex gap-4 flex-wrap text-white">
            {nfts?.map((item, index) =>
              item.nft_data.map((sub_item) => (
                <div key={`${index}-${sub_item?.token_id}`}>
                  <NftCard
                    name={sub_item?.external_data?.name}
                    img={sub_item?.external_data?.image}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NFTGallery;
