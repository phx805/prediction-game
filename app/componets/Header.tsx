import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
  return (
    <div className="flex justify-between items-center bg-black p-4 ">
      <div className="ml-4 gap-4 flex items-center">
      <Image
      src="/avalanche-avax-logo.svg"
      width={56}
      height={56}
      alt=""

    />
    
      <Link href="/" className="text-white text-2xl">Pro Predictons</Link>
      </div>
      <div className="mr-4 gap-6 max-sm:flex-col-reverse flex items-center">
        <h3 className="max-md:hidden p-1 bg-red-500 rounded-xl">Beta</h3>
        <Link href="/Profile" className="text-white">Profile</Link>
        <Link href="/Tools" className="text-white">Tools</Link>
        <ConnectButton />
      </div>
    </div>

  )
}

export default Header