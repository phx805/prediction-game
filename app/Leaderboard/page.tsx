"use client";

import React from "react";
import Header from "../componets/Header";
import "@covalenthq/goldrush-kit/styles.css";
import {
  AddressActivityListView,
  GoldRushProvider,
  NFTCollectionTokenListView,
} from "@covalenthq/goldrush-kit";

function page() {
  return (
    <>
      <Header />
      <div className="h-screen overflow-y-auto flex flex-col justify-start items-start text-white m-8 leaderboard pb-12 sm:m-16">
        <GoldRushProvider
          apikey={"cqt_rQDhFWh8qxVbFxX6tmJb3gVWRK8d"}
          mode="dark"
          color="emerald"
        >
          <NFTCollectionTokenListView
            chain_name={"avalanche-testnet"} //sample chain
            collection_address={"0xB8B88636c85F9A00145a220D7449b129edb75495"}
            name={"name"}
          />
          <NFTCollectionTokenListView
            chain_name={"avalanche-testnet"} //sample chain
            collection_address={"0x3E887DafC8A4535CF5Fc472e68A32Ea8582550EB"}
            name={"name"}
          />
        </GoldRushProvider>
      </div>
    </>
  );
}

export default page;
