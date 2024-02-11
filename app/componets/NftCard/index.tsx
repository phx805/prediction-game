import { FC } from "react";

interface NftCardPropType {
  name: string;
  img: string;
}

const NftCard: FC<NftCardPropType> = ({ name, img }) => {
  return (
    <div className="bg-slate-700 w-[320px] flex flex-col gap-2 max-w-sm p-6 border border-gray-500 rounded-lg shadow hover:bg-slate-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <span>{name}</span>
      <img src={img} alt="nft image" className="rounded-lg" />
    </div>
  );
};

export default NftCard;
