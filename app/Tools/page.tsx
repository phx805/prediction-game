import Link from 'next/link'
import Image from 'next/image'
import { FaWallet } from "react-icons/fa6";
import Header from '../componets/Header';


function page() {
  return (
    <>
    <Header />
    <h1 className="p-4 text-white text-center text-4xl">Choose your Weapon</h1>
    <div className="flex flex-col items-center">
    <div className="m-4 px-8 max-w-xs max-h-80 flex-col rounded-md bg-neutral-800 shadow-neon">
    <Link href="https://metamask.io/download/" className="gap-4 p-4 text-white text-2xl flex flex-row items-center justify-between">Meta Mask <FaWallet />
</Link>

<Link href="https://www.coinbase.com/wallet/downloads" className="gap-4 p-4 text-white text-2xl flex flex-row items-center justify-between">CoinBase <FaWallet />
</Link>
    </div>
    </div>
    </>
  )
}

export default page