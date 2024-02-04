"use client"

import { useState } from "react";
import Link from 'next/link'
import { NFTStorage, File } from "nft.storage";
import { ethers } from "ethers";
import { useAccount, useContractWrite, usePrepareContractWrite, } from 'wagmi';
import abi from "../utils/Web3LegendsABI.json"





function Picks() {

    const [buttonText, setButtonText] = useState('Mint');
    const { isConnected } = useAccount();
    

const [tournament, setTournament] = useState({});
    const [team1, setTeam1] = useState({}); 
    const [team2, setTeam2] = useState({});
    const [team3, setTeam3] = useState({});
    const [team4, setTeam4] = useState({});
    const [team5, setTeam5] = useState({});
    const [team6, setTeam6] = useState({});
    const [score, setScore] = useState({});


function sleep(ms: number | undefined) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const imageURIs = [
  { uri: ['Apex 1', 'Common Game Pass','https://white-serious-slug-851.mypinata.cloud/ipfs/QmNNyQqyXPm8JrgUD6UbaQvMggxDtZypSZTXx9QU7YyJ15'], occurrence: 20 },
  { uri: ['Apex 3', 'Common Game Pass','https://white-serious-slug-851.mypinata.cloud/ipfs/QmS3A6ptH8BgbGHWj9diyBd7AqKJuiCTxXJBDeYWXVsiMV'], occurrence: 20 },
  { uri: ['Apex 2', 'Rare Game Pass','https://white-serious-slug-851.mypinata.cloud/ipfs/QmTFEwYt5ncAp4wAQWRJxNb6HitJZvXRuLMDXPf1RambK4'], occurrence: 15 },
  { uri: ['Puppet Master', 'Rare Game Pass','https://white-serious-slug-851.mypinata.cloud/ipfs/QmYHaTJUEx8JydjWBwBzedrKVaqWyDoCwTJbAcZ5w9iQag'], occurrence: 15 },
  { uri: ['Unmerciful', 'Epic Game Pass','https://white-serious-slug-851.mypinata.cloud/ipfs/QmcbvwqYoTYAfcbp3yqtQMyxcTUM8ba4EeYn7MvgfjBNBG'], occurrence: 7.5 },
  { uri: ['Dinna fash', 'Epic Game Pass','https://white-serious-slug-851.mypinata.cloud/ipfs/QmbYa37wRN7Y3V7yHvyFnK3jDDc1g2zzdbBojjnujiQFdk'], occurrence: 7.5 },
  { uri: ['Just Business', 'Legendary Game Pass','https://white-serious-slug-851.mypinata.cloud/ipfs/QmNkNVzPgsQEV5LNx9BDEzcmM9DkuyPqWqgDBzQ75GQPkZ'], occurrence: 5 },
  { uri: ['Get Some', 'Legendary Game Pass','https://white-serious-slug-851.mypinata.cloud/ipfs/QmV4A6ZvMUzqwmAR6GgmhWV4GjFydUhRgnve1biZ8XZ3Yb'], occurrence: 5 },
  { uri: ['Champions', 'Mythic Game Pass','https://white-serious-slug-851.mypinata.cloud/ipfs/QmVMkpd7eNcb3nba9EDiuYsAthBxrNb2Ze9sB5jaASGKzK'], occurrence: 2.5 },
  { uri: ['Champions', 'Mythic Game Pass','https://white-serious-slug-851.mypinata.cloud/ipfs/Qmf4x4ZwXtLEJQ8CsvyYekDsKMFn7asdBCq29SnKnMx6SC'], occurrence: 2.5 }
];

function chooseRandomImageURI() {
  const randomValue = Math.random() * 100;
  let cumulativePercentage = 0;

  for (const { uri, occurrence } of imageURIs) {
    cumulativePercentage += occurrence;

    if (randomValue <= cumulativePercentage) {
      return uri;
    }
  }

  // If no image URI was chosen, return the last one
  return imageURIs[imageURIs.length - 1].uri;
}
const mintNFT = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
  event.preventDefault();
  try {
    if (!isConnected) {
      try {
        
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const signer = provider.getSigner();
        const contractAddr = "0x829CfD6654aaEA5464E3765E10BaA4A8ad33c5AF";
        const Contract = new ethers.Contract(contractAddr, abi, signer);
        // console.log(Contract);
        const client = new NFTStorage({ token: process.env.API_KEY });
    const  imageUrl = chooseRandomImageURI();
    // console.log(imageUrl);
    const response = await fetch(imageUrl[2]);
    const blob = await response.blob();
    setButtonText('Uploading your Picks...');
    const metadata = await client.store({
     name: imageUrl[0],
     description: imageUrl[1],
     image: new File([blob], "picks.png", { type: "image/png" }),// uri[2]
     attributes: {
      "Team1": `${team1},${score}`,
      "Team2": `${team2}`,
      "Team3": `${team3}`,
      "Team4": `${team4}`,
      "Team5": `${team5}`,
      "Team6": `${team6}`,
      "Tournament": `${tournament}`,
      }
    });
    // console.log("Metadata stored on IPFS with URL:", metadata.url);
    setButtonText('Minting NFT...');
    const mintTx = await Contract.mintNFT(metadata.url, {"value": ethers.utils.parseEther("3")});
    await mintTx.wait();
    setButtonText('NFT Minted...');
    // console.log("NFT Minted");
    await sleep(5000);
    setButtonText('Mint');

    const myForm = document.getElementById('myForm') as HTMLFormElement;
    myForm.reset();

  } catch (err) {
    console.log(err);
    setButtonText('Mint');
  }
  

} else {
  window.alert("Please connect Wallet");
}


} catch (error) {
console.error(error);
setButtonText('Mint');
}


}
const mintNFTS = async () => {
  const imageURIs = [
    { uri: 'URI_FOR_IMAGE_1', occurrence: 20 },
    { uri: 'URI_FOR_IMAGE_2', occurrence: 20 },
    { uri: 'URI_FOR_IMAGE_3', occurrence: 15 },
    { uri: 'URI_FOR_IMAGE_4', occurrence: 15 },
    { uri: 'URI_FOR_IMAGE_5', occurrence: 7.5 },
    { uri: 'URI_FOR_IMAGE_6', occurrence: 7.5 },
    { uri: 'URI_FOR_IMAGE_7', occurrence: 5 },
    { uri: 'URI_FOR_IMAGE_8', occurrence: 5 },
    { uri: 'URI_FOR_IMAGE_9', occurrence: 2.5 },
    { uri: 'URI_FOR_IMAGE_10', occurrence: 2.5 }
  ];

  function chooseRandomImageURI() {
    const randomValue = Math.random() * 100;
    let cumulativePercentage = 0;
  
    for (const { uri, occurrence } of imageURIs) {
      cumulativePercentage += occurrence;
  
      if (randomValue <= cumulativePercentage) {
        return uri;
      }
    } 
     // If no image URI was chosen, return the last one
     return imageURIs[imageURIs.length - 1].uri;
    }

  }


  return (
    <div className="mt-12 md:flex md:justify-center">
     <form id="myForm" onSubmit={mintNFT}>
      <div className="md:flex md:justify-end">
        <div className="flex flex-col items-center">
      <div className="m-4 max-w-xs max-h-80 flex items-center py-4 flex-col rounded-xl bg-neutral-800 shadow-slate">
        <h1 className="text-white text-xl font-medium">NA</h1>
    <div className="flex justify-center">
      <fieldset className="p-2 mx-2 w-64 rounded-xl flex flex-col text-white bg-gradient-to-tl from-violet-700 shadow-neon">
        <legend className="text-center text-xl font-medium">Tournament</legend>
        <select required className="text-black focus:ring-redd-700" name="id" defaultValue={'DEFAULT'} onChange={(event) => setTournament(event.target.value)}>
        <option value="DEFAULT" disabled>Select Tournament</option>
          <option>Split 1: Feb 4th, AvsB</option>
          <option>Split 1: Feb 10th, AvsC</option>
        </select>
      </fieldset>
    </div>

    <h2 className="mt-2 text-center text-white">Make your Predictions</h2>
    
    
      
      

    
      <fieldset className="p-2 w-64 rounded-xl flex flex-col text-white bg-gradient-to-tl from-violet-700 shadow-neon">
        <legend>1st Place</legend>
        <label htmlFor="g1First">select team</label>
        <input required className="text-black p-1 rounded-lg focus:border-redd-700" type="text" name="Game1-1st" id="g1First" list="proTeams" placeholder="pick team" onChange={(event) => setTeam1(event.target.value)}/>
        
        <label htmlFor="g1Second">Total Points</label>
        <input required className="text-black p-1 rounded-lg focus:border-redd-700" type="number" name="Game1-2nd" id="g1Second" placeholder="Score" onChange={(event) => setScore(event.target.value)}/>
        
     
      </fieldset>
      </div>

      <h2 className="mt-2 text-center text-white">3 Matic</h2>

    <div className="">
      <button className="text-white px-6 py-2 cursor-pointer hover:scale-110 rounded bg-gradient-to-b from-violet-700 shadow-neon" type="submit"  disabled={isConnected ? false : true}>{buttonText}</button>
    </div>

    <Link href='https://liquipedia.net/apexlegends/Apex_Legends_Global_Series/2024/Split_1/Pro_League/North_America/Matches'>
        <div className="p-2 m-2 hover:bg-violet-600/30 text-white text-2xl rounded-md">Pro League Groups
    </div>
    </Link>
    </div>

    <div className="flex flex-col items-center">

      <div className="m-4 flex items-center py-4 flex-col rounded-xl bg-neutral-800 shadow-slate">
        
        <div className="lg:basis-1/5 lg:flex lg: justify-center">
        <fieldset className="p-2 m-2 w-64 rounded-xl flex flex-col text-white bg-gradient-to-tl from-violet-700 shadow-neon">
        <legend>2nd Place</legend>
        <label htmlFor="g2First">select team</label>
        <input required className="text-black p-1 rounded-lg focus:border-redd-700" type="text" name="Game2-1st" id="g2First" list="proTeams" placeholder="pick team" onChange={(event) => setTeam2(event.target.value)}/>
        
      
      </fieldset>
      </div>
    

    <div className="lg:basis-1/5 lg:flex lg: justify-center">
      <fieldset className="p-2 m-2 w-64 rounded-xl flex flex-col text-white bg-gradient-to-tl from-violet-700 shadow-neon">
        <legend>3rd Place</legend>
        <label htmlFor="g3First">select team</label>
        <input required className="text-black p-1 rounded-lg focus:border-redd-700" type="text" name="Game3-1st" id="g3First" list="proTeams" placeholder="pick team" onChange={(event) => setTeam3(event.target.value)}/>
        
       
      </fieldset>
      </div>

   

      <div className="lg:basis-1/5 lg:flex lg: justify-center">
      <fieldset className="p-2 m-2 w-64 rounded-xl flex flex-col text-white bg-gradient-to-tl from-violet-700 shadow-neon">
        <legend>4th Place</legend>
        <label htmlFor="g4First">select team</label>
        <input required className="text-black p-1 rounded-lg focus:border-redd-700" type="text" name="Game4-1st" id="g4First" list="proTeams" placeholder="pick team" onChange={(event) => setTeam4(event.target.value)} />
        
      
      </fieldset>
    </div>

    <div className="lg:basis-1/5 lg:flex lg: justify-center">
      <fieldset className="p-2 m-2 w-64 rounded-xl flex flex-col text-white bg-gradient-to-tl from-violet-700 shadow-neon">
        <legend>5th Place</legend>
        <label htmlFor="g5First">select team</label>
        <input required className="text-black p-1 rounded-lg focus:border-redd-700" type="text" name="Game5-1st" id="g5First" list="proTeams" placeholder="pick team" onChange={(event) => setTeam5(event.target.value)}/>
        
       
      </fieldset>
      </div>

      <div className="lg:basis-1/5 lg:flex lg: justify-center">          
      <fieldset className="p-2 m-2 w-64 rounded-xl flex flex-col text-white bg-gradient-to-tl from-violet-700 shadow-neon">
        <legend>6th Place</legend>
        <label htmlFor="g6First">select team</label>
        <input required className="text-black p-1 rounded-lg focus:border-redd-700" type="text" name="Game6-1st" id="g6First" list="proTeams" placeholder="pick team" onChange={(event) => setTeam6(event.target.value)}/>
        
       
      </fieldset>
      </div>
      </div>
      </div>

    <datalist id="proTeams">
      {/* Group A */}
      <option value="TSM"></option>
        <option value="Luminosity"></option>
      <option value="Oxygen"></option>
      <option value="Dudes Night Out"></option>
      <option value="Skrt"></option>
      <option value="Flat"></option>
      <option value="Native Gaming"></option>
      <option value="GKS"></option>
      <option value="Oblivion"></option>
      <option value="Drop-In Gaming"></option>
      {/* Group B */}
      <option value="OpTic Gaming"></option>
      <option value="Eternal EC"></option>
      <option value="DarkZero"></option>
      <option value="Complexity"></option>
      <option value="Faze"></option>
      <option value="KREAM"></option>
      <option value="Ape Gang"></option>
      <option value="Elev8 Gaming"></option>
      <option value="Tempr"></option>
      <option value="PLP"></option>
      {/* Group C */}
      <option value="Disguised"></option>
      <option value="Oversleepers"></option>
      <option value="Sentinels"></option>
      <option value="XSET"></option>
      <option value="FURIA"></option>
      <option value="Legacy"></option>
      <option value="Moist"></option>
      <option value="Meat Lovers"></option>
      <option value="N9ne Lies"></option>
      <option value="EVYLUTION"></option>
    </datalist>
    </div>
  </form>
  </div>
  )
}

export default Picks