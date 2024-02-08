import Link from 'next/link'
import { BsDiscord } from "react-icons/bs";
import { TbLetterX } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";



function Footer() {
  return (
    <div className="mt-8">
        <div className="gap-8 flex flex-row-reverse">
        
        <Link href='https://www.youtube.com/channel/UCRago64jVGUXqOZV4sIZhHA'>
        <div className="hover:bg-white p-2 w-fit bg-red-600 rounded-md"><IoLogoYoutube />
    </div>
    </Link>

    <Link href='https://discord.gg/UjpfkkGC'>
        <div className="hover:bg-white p-2 w-fit bg-red-600 rounded-md"><BsDiscord />
    </div>
    </Link>

    <Link href='https://twitter.com/LegendsWeb3'>
        <div className="hover:bg-white p-2 w-fit bg-red-600 rounded-md"><TbLetterX />
    </div>
    </Link>

    <Link href=''>
        <div className="hover:bg-white p-2 w-fit bg-red-600 rounded-md"><FaGlobe />
    </div>
    </Link>
    </div>
  </div>
  
  )
}

export default Footer