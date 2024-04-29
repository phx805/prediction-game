import Link from 'next/link'
import Image from 'next/image'
import { FaWallet } from "react-icons/fa6";
import Header from '../componets/Header';
import MetaMaskImg from '@/public/assets/imgs/MetaMaskImg.png';
import Coinbase from '@/public/assets/imgs/Coinbase.png';


function page() {
  return (
    <>
    <Header />
    <h1 className="p-4 text-white text-center text-4xl"></h1>
    <div className="grid grid-rows-4 grid-flow-col gap-4">
    <div className="m-4 px-8 max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className="gap-1 p-1 text-white text-2xl flex flex-row items-center justify-between"><Image
          alt="wallet"
          src={MetaMaskImg.src}
          width={MetaMaskImg.width}
          height={MetaMaskImg.height}
        />
    </Link>
    </div>

    <div className="m-4 px-8 max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://www.coinbase.com/wallet/downloads" className="gap-4 p-4 text-white text-2xl flex flex-row items-center justify-between">
      <Image
          alt="wallet"
          src={Coinbase.src}
          width={Coinbase.width}
          height={Coinbase.height}
        />
    </Link>


    </div>

    <div className="m-4 px-8 max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className="gap-4 p-4 text-white text-2xl flex flex-row items-center justify-between"></Link>


    </div>

    <div className="m-4 px-8 max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className="gap-4 p-4 text-white text-2xl flex flex-row items-center justify-between"></Link>


    </div>

    <div className="m-4 px-8 max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className="gap-4 p-4 text-white text-2xl flex flex-row items-center justify-between"></Link>


    </div>

    <div className="m-4 px-8 max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className="gap-4 p-4 text-white text-2xl flex flex-row items-center justify-between"></Link>


    </div>

    <div className="m-4 px-8 max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className="gap-4 p-4 text-white text-2xl flex flex-row items-center justify-between"></Link>


    </div>

    <div className="m-4 px-8 max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className="gap-4 p-4 text-white text-2xl flex flex-row items-center justify-between"></Link>


    </div>

    <div className="m-4 px-8 max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className="gap-4 p-4 text-white text-2xl flex flex-row items-center justify-between"></Link>


    </div>
    </div>
    </>
  )
}

export default page