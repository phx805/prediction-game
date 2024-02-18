"use client";

import React from 'react';
import Header from '../componets/Header';
import "@covalenthq/goldrush-kit/styles.css";
import { AddressActivityListView, GoldRushProvider, NFTCollectionTokenListView } from "@covalenthq/goldrush-kit";

function page() {
  return (
   <>
   <Header/>
   <div  className="text-white m-20">
   <GoldRushProvider
                apikey={"cqt_rQDhFWh8qxVbFxX6tmJb3gVWRK8d"}
                mode="dark"
                color="emerald"
            >
                
                <NFTCollectionTokenListView
                chain_name={"avalanche-testnet"} //sample chain
                collection_address={"0x3E887DafC8A4535CF5Fc472e68A32Ea8582550EB"}
                name={"name"}
                />
            </GoldRushProvider>
            </div>
   </>
  )
}

export default page
