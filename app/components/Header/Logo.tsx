import Image from "next/image";
import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="h-[68px] w-[68px] rounded-full relative overflow-hidden">
      <Image
        src={"/images/logOriental.jpg"}
        fill
        className="object-cover"
        alt="Logoriental"
      />
    </div>
  );
};
export default Logo;
