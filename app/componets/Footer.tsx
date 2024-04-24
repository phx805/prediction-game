import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { TbLetterX } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <div className="w-full flex justify-between items-center fixed bottom-[36px] left-0 px-14 max-[512px]:flex max-[512px]:flex-col max-[512px]:gap-2 max-[512px]:bottom-[16px]">
      <div className="gap-8 flex flex-row-reverse">
        <Link href="https://www.youtube.com/channel/UCRago64jVGUXqOZV4sIZhHA">
          <div className="hover:opacity-60 p-2 w-fit bg-red-600 rounded-md">
            <IoLogoYoutube />
          </div>
        </Link>

        <Link href="https://discord.gg/UjpfkkGC">
          <div className="hover:opacity-60 p-2 w-fit bg-red-600 rounded-md">
            <BsDiscord />
          </div>
        </Link>

        <Link href="https://twitter.com/LegendsWeb3">
          <div className="hover:opacity-60 p-2 w-fit bg-red-600 rounded-md">
            <TbLetterX />
          </div>
        </Link>

        <Link href="">
          <div className="hover:opacity-60 p-2 w-fit bg-red-600 rounded-md">
            <FaGlobe />
          </div>
        </Link>
      </div>
      <span className="text-white text-[14px]">@ 2024 ProPredictions</span>
    </div>
  );
}

export default Footer;
