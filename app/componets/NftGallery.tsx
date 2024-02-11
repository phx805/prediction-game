"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import NftCard from "./NftCard";

interface nft {
  id: string;
  image_url: string;
  name: string;
  // Add other properties as needed
}

const NFTGallery = () => {
  const [nfts, setNfts] = useState<nft[]>([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": "0385bae12fb8424ba77995c3c73183ea",
          },
        };

        const response = await axios.get(
          "https://api.opensea.io/api/v2/chain/matic/contract/0x24A11e702CD90f034Ea44FaF1e180C0C654AC5d9/nfts/28318",
          options
        );
        const data = response.data;
        // const data = await response.json();
        console.log(data.nft);

        setNfts([data.nft] || []);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchNFTs();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="flex flex-col p-8 gap-3">
      <h1 className="text-white">Your NFT Gallery</h1>
      <div className="text-white">
        {nfts.map((nft) => (
          <div key={nft.id}>
            <NftCard name={nft.name} img={nft.image_url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
