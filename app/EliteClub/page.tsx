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
        
      </div>
    </>
  );
}

export default page;
