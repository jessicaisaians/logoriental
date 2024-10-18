import { Bai_Jamjuree } from "next/font/google";
import Link from "next/link";
import { FC } from "react";

interface InfoCardProps {
  isLink?: boolean;
  href?: string;
  text: string;
  icon: React.ReactElement;
}

const baiJamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });
const InfoCard: FC<InfoCardProps> = ({ isLink, href, text, icon }) => {
  return (
    <div className="group col-span-1 p-[18px] bg-dark-10 gap-[11px] flex items-start justify-start flex-nowrap rounded-[21px]">
      {icon}
      {isLink && !!href ? (
        <Link href={href} passHref target="_blank">
          <p className={`${baiJamjuree.className} heading-3 mb-[1px]`}>
            {text}
          </p>
        </Link>
      ) : (
        <p className={`${baiJamjuree.className} heading-3 mb-[1px]`}>{text}</p>
      )}
    </div>
  );
};
export default InfoCard;
