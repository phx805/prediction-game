"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NFTStorage, File } from "nft.storage";
import { useAccount, useContractWrite } from "wagmi";
import { abi } from "../utils/ProPredictionsABI";
import { parseEther } from "viem";
import Footer from "./Footer";
import { toast } from "react-toastify";
import Image from "next/image";

import researchTeamImg from "@/public/assets/imgs/researchTeam.png";
import eliteClubImg from "@/public/assets/imgs/eliteClub.png";
import trophyImg from "@/public/assets/ApexTrophy.png";

import Button from "./basic/Button";
import { useRouter } from "next/navigation";

function Picks() {
  const [buttonText, setButtonText] = useState("Mint");

  const [tournament, setTournament] = useState<String>("");
  const [team1, setTeam1] = useState<String>("");
  const [team2, setTeam2] = useState<String>("");
  const [team3, setTeam3] = useState<String>("");
  const [team4, setTeam4] = useState<String>("");
  const [team5, setTeam5] = useState<String>("");
  const [team6, setTeam6] = useState<String>("");
  const [score, setScore] = useState<String>("");

  const { isConnected } = useAccount();
  const router = useRouter();
  useEffect(() => {
    if (!isConnected) router.push("/");
  });

  // const API_KEY =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDg5NTM3ODM5OGMxMDQxMjFlM2MyNDdkMTkxREU0OGRlNzc0ZTBDMDQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4ODUwNDkxNDU5NCwibmFtZSI6IkFwZXgifQ.UYBm8hj2ITLiznEz5ApQMKah_KQhyuPOAZB53sxw4rI";

  function sleep(ms: number | undefined) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const imageURIs = [
    {
      uri: [
        "Apex 1",
        "Common Game Pass",
        "https://jade-given-spoonbill-404.mypinata.cloud/ipfs/QmNNyQqyXPm8JrgUD6UbaQvMggxDtZypSZTXx9QU7YyJ15",
      ],
      occurrence: 20,
    },
    {
      uri: [
        "Apex 3",
        "Common Game Pass",
        "https://jade-given-spoonbill-404.mypinata.cloud/ipfs/QmS3A6ptH8BgbGHWj9diyBd7AqKJuiCTxXJBDeYWXVsiMV",
      ],
      occurrence: 20,
    },
    {
      uri: [
        "Apex 2",
        "Rare Game Pass",
        "https://jade-given-spoonbill-404.mypinata.cloud/ipfs/QmTFEwYt5ncAp4wAQWRJxNb6HitJZvXRuLMDXPf1RambK4",
      ],
      occurrence: 15,
    },
    {
      uri: [
        "Puppet Master",
        "Rare Game Pass",
        "https://jade-given-spoonbill-404.mypinata.cloud/ipfs/QmYHaTJUEx8JydjWBwBzedrKVaqWyDoCwTJbAcZ5w9iQag",
      ],
      occurrence: 15,
    },
    {
      uri: [
        "Unmerciful",
        "Epic Game Pass",
        "https://jade-given-spoonbill-404.mypinata.cloud/ipfs/QmcbvwqYoTYAfcbp3yqtQMyxcTUM8ba4EeYn7MvgfjBNBG",
      ],
      occurrence: 7.5,
    },
    {
      uri: [
        "Dinna fash",
        "Epic Game Pass",
        "https://jade-given-spoonbill-404.mypinata.cloud/ipfs/QmbYa37wRN7Y3V7yHvyFnK3jDDc1g2zzdbBojjnujiQFdk",
      ],
      occurrence: 7.5,
    },
    {
      uri: [
        "Just Business",
        "Legendary Game Pass",
        "https://jade-given-spoonbill-404.mypinata.cloud/ipfs/QmNkNVzPgsQEV5LNx9BDEzcmM9DkuyPqWqgDBzQ75GQPkZ",
      ],
      occurrence: 5,
    },
    {
      uri: [
        "Get Some",
        "Legendary Game Pass",
        "https://jade-given-spoonbill-404.mypinata.cloud/ipfs/QmV4A6ZvMUzqwmAR6GgmhWV4GjFydUhRgnve1biZ8XZ3Yb",
      ],
      occurrence: 5,
    },
    {
      uri: [
        "Champions",
        "Mythic Game Pass",
        "https://jade-given-spoonbill-404.mypinata.cloud/ipfs/QmVMkpd7eNcb3nba9EDiuYsAthBxrNb2Ze9sB5jaASGKzK",
      ],
      occurrence: 2.5,
    },
    {
      uri: [
        "Champions",
        "Mythic Game Pass",
        "https://jade-given-spoonbill-404.mypinata.cloud/ipfs/Qmf4x4ZwXtLEJQ8CsvyYekDsKMFn7asdBCq29SnKnMx6SC",
      ],
      occurrence: 2.5,
    },
  ];

  const TOTAL_PERCENTAGE = 100;

  function chooseRandomImageURI() {
    const randomValue = Math.random() * TOTAL_PERCENTAGE;
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

  const contractAddr = "0x77969f0EF52DA4BD2Ef352Be9f0991D5C5cF656d";
  const client = new NFTStorage({
    token: process.env.NEXT_PUBLIC_API_KEY as string,
  });
  const imageUrl = chooseRandomImageURI();
  // console.log(imageUrl);

  const { write } = useContractWrite({
    address: contractAddr,
    abi: abi,
    functionName: "mintNFT",
    args: [2],
    value: parseEther("0.07"),
  });

  const mintNFT = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (isConnected) {
        try {
          if (!tournament) return toast.warning("Please select tournament");
          if (!team1) return toast.warning("Please select 1st team");
          if (!score) return toast.warning("Please select score");
          if (!team2) return toast.warning("Please select 2nd team");
          if (!team3) return toast.warning("Please select 3rd team");
          if (!team4) return toast.warning("Please select 4th team");
          if (!team5) return toast.warning("Please select 5th team");
          if (!team6) return toast.warning("Please select 6th team");

          setButtonText("Loading Picks...");
          const response = await fetch(imageUrl[2]);
          const _blob = await response.blob();
          const metadata = await client.store({
            name: imageUrl[0],
            description: imageUrl[1],
            image: new File([_blob!], "picks.png", { type: "image/png" }), // uri[2]
            attributes: {
              Team1: `${team1}`,
              Score: `${score}`,
              Team2: `${team2}`,
              Team3: `${team3}`,
              Team4: `${team4}`,
              Team5: `${team5}`,
              Team6: `${team6}`,
              Tournament: `${tournament}`,
            },
          });
          // console.log("mint button clicked :", metadata);
          await write?.({
            args: [metadata?.url],
          });
          // setButtonText("Minting NFT...");
          setButtonText("Minting...");
          // console.log("NFT Minted");
          await sleep(5000);
          setButtonText("Mint");
          // const myForm = document.getElementById("myForm") as HTMLFormElement;
          // myForm.reset();
        } catch (err) {
          console.log(err);
          setButtonText("Mint");
        }
      } else {
        return toast.error("Please connect Wallet");
      }
    } catch (error) {
      console.error(error);
      setButtonText("Mint");
    }
  };

  return (
    <div className="flex justify-center items-center h-full bg-cover bg-no-repeat bg-mint-bg">
      <div className="flex flex-col justify-center items-center gap-2 -translate-y-[160px] max-[1600px]:translate-x-[48px] max-[1520px]:translate-x-[86px] max-[1400px]:translate-x-[120px] max-[1386px]:hidden">
        <span className="text-white py-1 px-2 bg-[#162036bc] rounded-lg text-[25px]">Research Teams</span>
        <Link
          className="hover:bg-[#162036bc] p-4 rounded-lg"
          href="https://liquipedia.net/apexlegends/Apex_Legends_Global_Series/2024/Split_2/Pro_League/North_America/Round_1"
        >
          <Image
            alt="research teams"
            src={researchTeamImg.src}
            width={researchTeamImg.width}
            height={researchTeamImg.height}
            className="w-[320px]"
          />
        </Link>
      </div>

      <div
        id="myForm"
        className="max-[1078px]:h-full max-[1078px]:py-[124px] max-[1078px]:overflow-y-auto max-[580px]:w-full max-[580px]:px-4 z-10"
      >
        <div className="flex justify-start flex-col gap-4 max-[1078px]:py-4 max-[1078px]:px-4 max-[580px]:w-full">
          <div className="flex flex-col items-center">
            <div className="max-w-s max-h-80 flex gap-4 items-center flex-col rounded-xl">
              <h1 className=" text-white p-2 text-4xl font-medium bg-[#162036bc] rounded-lg shadow-neon">
                Make Your Predictions
              </h1>
              <div className="flex justify-center">
                <fieldset className="p-2 mx-2 w-64 rounded-xl flex flex-col text-white bg-gradient-to-tl">
                  <legend className="text-center text-xl font-medium max-[1078px]:w-[508px] max-[580px]:w-full">
                    Tournament
                  </legend>
                  <select
                    required
                    className="text-white focus:ring-redd-600 bg-[#1b1b1b80] rounded-lg focus:border-redd-600 h-[40px] px-4 hover:bg-[#162036bc]"
                    name="id"
                    defaultValue={"DEFAULT"}
                    onChange={(event) => setTournament(event.target.value)}
                  >
                    <option value="DEFAULT" disabled>
                      Select Tournament
                    </option>
                    <option>Round 1: AvsC</option>
                    {/* <option>Split 1: May 2, AvsB</option>
                    <option>Split 1: May 2, AvsD</option> */}
                  </select>
                </fieldset>
              </div>

              {/* <fieldset className="p-2 w-64 rounded-xl flex gap-4 text-white bg-gradient-to-tl from-red-600 shadow-neon max-[580px]:flex-col"> */}
              <fieldset className="p-2 w-64 rounded-xl flex gap-4 text-white bg-gradient-to-tl  max-[580px]:flex-col">
                <legend className="w-fit p-1 text-center bg-[#162036bc] rounded-lg">
                  1st Place
                </legend>
                <div className="flex flex-col justify-start items-start">
                  {/* <label htmlFor="g1First">select team</label> */}
                  <input
                    required
                    className="text-white bg-[#1b1b1b80] h-[40px] p-1 rounded-lg focus:border-redd-600 hover:bg-[#162036bc]"
                    type="text"
                    name="Game1-1st"
                    id="g1First"
                    list="proTeams"
                    placeholder="pick team"
                    onChange={(event) => setTeam1(event.target.value)}
                  />
                </div>

                <div className="flex flex-col justify-start items-start">
                  {/* <label htmlFor="g1Second">Total Points</label> */}
                  <input
                    required
                    className="text-white bg-[#1b1b1b80] h-[40px] p-1 rounded-lg focus:border-redd-600 hover:bg-[#162036bc]"
                    type="number"
                    name="Game1-2nd"
                    id="g1Second"
                    placeholder="Score"
                    onChange={(event) => setScore(event.target.value)}
                  />
                </div>
              </fieldset>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center flex-col rounded-xl max-[580px]:gap-4">
              <div className="flex gap-4 max-[1078px]:flex-col">
                <div className="lg:basis-1/5 lg:flex lg: justify-center">
                  <fieldset className="p-2 m-2 w-[360px] rounded-xl flex flex-col text-white bg-gradient-to-tl  max-[1078px]:w-[508px] max-[580px]:w-64">
                    <legend className="w-fit p-1 text-center bg-[#162036bc] rounded-xl">
                      2nd Place
                    </legend>
                    {/* <label htmlFor="g2First">select team</label> */}
                    <input
                      required
                      className="text-white bg-[#1b1b1b80] h-[40px] p-1 rounded-lg focus:border-redd-600 hover:bg-[#162036bc]"
                      type="text"
                      name="Game2-1st"
                      id="g2First"
                      list="proTeams"
                      placeholder="pick team"
                      onChange={(event) => setTeam2(event.target.value)}
                    />
                  </fieldset>
                </div>

                <div className="lg:basis-1/5 lg:flex lg: justify-center">
                  <fieldset className="p-2 m-2 w-[360px] rounded-xl flex flex-col text-white bg-gradient-to-tl  max-[1078px]:w-[508px] max-[580px]:w-64">
                    <legend className="w-fit p-1 text-center bg-[#162036bc] rounded-xl">
                      3rd Place
                    </legend>
                    {/* <label htmlFor="g3First">select team</label> */}
                    <input
                      required
                      className="text-white bg-[#1b1b1b80] h-[40px] p-1 rounded-lg focus:border-redd-600 hover:bg-[#162036bc]"
                      type="text"
                      name="Game3-1st"
                      id="g3First"
                      list="proTeams"
                      placeholder="pick team"
                      onChange={(event) => setTeam3(event.target.value)}
                    />
                  </fieldset>
                </div>
              </div>

              <div className="flex gap-4 max-[1078px]:flex-col">
                <div className="justify-center">
                  <fieldset className="p-2 m-2 w-80 rounded-xl flex flex-col text-white bg-gradient-to-tl  max-[1078px]:w-[508px] max-[580px]:w-64">
                    <legend className="w-fit p-1 text-center bg-[#162036bc] rounded-xl">
                      4th Place
                    </legend>
                    {/* <label htmlFor="g4First">select team</label> */}
                    <input
                      required
                      className="text-white bg-[#1b1b1b80] h-[40px] p-1 rounded-lg focus:border-redd-600 hover:bg-[#162036bc]"
                      type="text"
                      name="Game4-1st"
                      id="g4First"
                      list="proTeams"
                      placeholder="pick team"
                      onChange={(event) => setTeam4(event.target.value)}
                    />
                  </fieldset>
                </div>

                <div className="justify-center">
                  <fieldset className="p-2 m-2 w-80 rounded-xl flex flex-col text-white bg-gradient-to-tl  max-[1078px]:w-[508px] max-[580px]:w-64">
                    <legend className="w-fit p-1 text-center bg-[#162036bc] rounded-xl">
                      5th Place
                    </legend>
                    {/* <label htmlFor="g5First">select team</label> */}
                    <input
                      required
                      className="text-white bg-[#1b1b1b80] h-[40px] p-1 rounded-lg focus:border-redd-600 hover:bg-[#162036bc]"
                      type="text"
                      name="Game5-1st"
                      id="g5First"
                      list="proTeams"
                      placeholder="pick team"
                      onChange={(event) => setTeam5(event.target.value)}
                    />
                  </fieldset>
                </div>

                <div className="justify-center">
                  <fieldset className="p-2 m-2 w-80 rounded-xl flex flex-col text-white bg-gradient-to-tl  max-[1078px]:w-[508px] max-[580px]:w-64">
                    <legend className="w-fit p-1 text-center bg-[#162036bc] rounded-lg">
                      6th Place
                    </legend>
                    {/* <label htmlFor="g6First">select team</label> */}
                    <input
                      required
                      className="text-white bg-[#1b1b1b80] h-[40px] p-1 rounded-lg focus:border-redd-600 hover:bg-[#162036bc]"
                      type="text"
                      name="Game6-1st"
                      id="g6First"
                      list="proTeams"
                      placeholder="pick team"
                      onChange={(event) => setTeam6(event.target.value)}
                    />
                  </fieldset>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          {/* <h2 className="mt-2 text-center text-white">Avax</h2> */}

          <div className="w-full flex flex-col justify-center items-center">
            <Button
              text={buttonText}
              // className="text-white px-16 py-2 cursor-pointer hover:scale-110 rounded bg-gradient-to-b from-red-600 shadow-neon"
              onClick={(event: any) => mintNFT(event)}
              // disabled={isConnected ? false : true}
            />
            {/* <Link href="https://liquipedia.net/apexlegends/Apex_Legends_Global_Series/2024/Split_1/Pro_League/North_America/Matches">
              <div className="p-2 m-2 hover:bg-[#121c31] text-white text-2xl rounded-md">
                Pro League Groups
              </div>
            </Link> */}
          </div>

          <datalist id="proTeams">
            {/* Group A */}
            <option value="Team Falcons"></option>
            <option value="Spacestation Gaming"></option>
            <option value="Elev8 Gaming"></option>
            <option value="Oxygen Esports"></option>
            <option value="NRG"></option>
            <option value="YUP"></option>
            <option value="Most Hated"></option>
            <option value="CCE UCX"></option>
            <option value="WEAVE"></option>
            <option value="Tripods"></option>
            {/* Group B */}
            {/* <option value="Moist Esports"></option>
            <option value="Luminosity"></option>
            <option value="TSM"></option>
            <option value="Complexity"></option>
            <option value="SKD Mark"></option>
            <option value="Eternal Esports"></option>
            <option value="Ape Gang"></option>
            <option value="The Edgers"></option>
            <option value="NGNL Esports"></option>
            <option value="Bored"></option>  */}
            {/* Group C */}
            <option value="Cloud9"></option>
            <option value="Disguised"></option>
            <option value="Team Liquid"></option>
            <option value="FURIA"></option>
            <option value="Vanity"></option>
            <option value="Native Gaming"></option>
            <option value="Oblivion"></option>
            <option value="Flat"></option>
            <option value="Stallions"></option>
            <option value="Tempr"></option>

            {/* Group D */}
            {/* <option value="Wonton Dumpling"></option> */}
            {/* <option value="Not Moist"></option> */}
            {/* <option value="Alliance"></option> */}
            {/* <option value="RIDDLE"></option> */}
            {/* <option value="HAO"></option> */}
            {/* <option value="Passion UA"></option> */}
            {/* <option value="SpaceStation"></option> */}
            {/* <option value="Heroez"></option> */}
            {/* <option value="Complexity"></option> */}
            {/* <option value="BR Demonz"></option> */}
          </datalist>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 -translate-y-[160px] max-[1600px]:-translate-x-[48px] max-[1520px]:-translate-x-[86px] max-[1400px]:-translate-x-[120px] max-[1386px]:hidden">
        <span className="text-white py-1 px-4 bg-[#162036bc] rounded-lg text-[25px]">Elite Club</span>
        <Link href="/Mint">
          <Image
            className="hover:bg-[#162036bc] p-4 rounded-lg w-[320px]"
            alt="Elite club"
            src={eliteClubImg.src}
            width={eliteClubImg.width}
            height={eliteClubImg.height}
          />
        </Link>
      </div>
      {/* <div className="absolute flex justify-center items-center w-screen h-screen top-0 left-0 z-1">
        <Image
          alt="trophy"
          src={trophyImg.src}
          width={trophyImg.width}
          height={trophyImg.height}
          className="opacity-70 scale-150"
        />
      </div> */}
    </div>
  );
}

export default Picks;
