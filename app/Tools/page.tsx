import Link from 'next/link'
import Image from 'next/image'
import { FaWallet } from "react-icons/fa6";
import Header from '../componets/Header';
import MetaMaskImg from '@/public/assets/imgs/MetaMaskImg.png';
import Coinbase from '@/public/assets/imgs/Coinbase.png';
import UniswapIcon from '@/public/assets/imgs/UniswapIcon.png';
import TraderJoe from '@/public/assets/imgs/TraderJoe.png';


function page() {
  return (
    <>
    <Header />
    <h1 className="mt-20 p-4 text-white text-center text-2xl">Resoures</h1>
    <div className="flex flex-wrap justify-center gap-8">
    <div className=" max-w-60 max-h-60 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className="">
      <Image
          alt="wallet"
          src={MetaMaskImg.src}
          width={MetaMaskImg.width}
          height={MetaMaskImg.height}
        />
    </Link>
    </div>

    <div className="max-w-60 max-h-60 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://www.coinbase.com/wallet/downloads" className="">
      <Image
          alt="wallet"
          src={Coinbase.src}
          width={Coinbase.width}
          height={Coinbase.height}
        />
    </Link>


    </div>

    <div className="max-w-60 max-h-60 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://app.uniswap.org/" className="">
    <Image
          alt="wallet"
          src={UniswapIcon.src}
          width={UniswapIcon.width}
          height={UniswapIcon.height}
        />
    </Link>


    </div>

    <div className="max-w-60 max-h-60 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://traderjoexyz.com/avalanche" className="">
    <Image
          alt="wallet"
          src={TraderJoe.src}
          width={TraderJoe.width}
          height={TraderJoe.height}
        />
    </Link>


    </div>

    <div className="max-w-60 max-h-60 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className=""></Link>


    </div>

    <div className="max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className=""></Link>


    </div>

    {/* <div className="max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className=""></Link>


    </div>

    <div className="max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className=""></Link>


    </div>

    <div className="max-w-xs max-h-80 flex-col rounded-md bg-[#162036a7] shadow-neon">
    <Link href="https://metamask.io/download/" className=""></Link>


    </div> */}
    </div>
    </>
  )
}

export default page