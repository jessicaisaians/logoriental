import Link from "next/link";
import { FC } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Insta from "../icons/insta";

interface IndexProps {}

const Index: FC<IndexProps> = ({}) => {
  return (
    <header
      className="flex w-full gap-3 items-center justify-between bg-[var(--dark-6)] p-[6px] pl-[19px] rounded-[30px]"
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
      >
        <div className="h-[42px] w-[42px] rounded-[18px] bg-[var(--dark-10)] flex items-center justify-center">
          <Insta color="var(--purple-80)" fill="var(--purple-80)" />
        </div>
      </Link>
    </header>
  );
};
export default Index;
