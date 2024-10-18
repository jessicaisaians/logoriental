import Link from "next/link";
import { FC } from "react";
import Insta from "../icons/insta";
import Logo from "./Logo";
import Title from "./Title";

interface IndexProps {}

const Index: FC<IndexProps> = ({}) => {
  return (
    <header
      className="flex flex-wrap w-full gap-3 items-center justify-between bg-dark-6 p-[6px] pl-[19px] rounded-5xl"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px",
      }}
    >
      <div className="flex items-center gap-[8px]">
        <Logo />
        <Title />
      </div>
      <Link
        passHref
        href={"https://www.instagram.com/logoriental"}
        target="_blank"
        className="group"
      >
        <div className="h-[42px] w-[42px] relative rounded-[18px] bg-dark-10 flex items-center justify-center">
          <div
            className="group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300 absolute blur-[16px] -translate-y-1/2 left-1/2 top-1/2 bg-white -translate-x-1/2 pointer-events-none z-10 h-[14px] w-[14px] aspect-square"
            aria-hidden="true"
          ></div>
          <Insta />
        </div>
      </Link>
    </header>
  );
};
export default Index;
