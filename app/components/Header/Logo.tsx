import LogoSvg from "app/components/icons/Logo";
import { FC } from "react";
interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="h-[60px] w-[68px] rounded-full relative overflow-hidden">
      <LogoSvg />
      {/* <Image
        src={"/images/logOriental.jpg"}
        fill
        className="object-cover"
        alt="Logoriental"
      /> */}
    </div>
  );
};
export default Logo;
