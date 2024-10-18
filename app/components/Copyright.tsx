import { Bai_Jamjuree } from "next/font/google";
import { FC } from "react";

interface CopyrightProps {}
const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["300", "500"],
});
const Copyright: FC<CopyrightProps> = ({}) => {
  return (
    <div
      className="w-full p-6  not-last-child:mb-3 rounded-5xl bg-dark-6 flex flex-col items-start justify-between"
      style={{ direction: "ltr" }}
    >
      <p className={`${baiJamjuree.className} role font-light`}>
        © 2021. All rights Reserved.
      </p>
      <p className={`${baiJamjuree.className} role font-light`}>
        Made By <b className="font-bold">Logoriental</b>
      </p>
    </div>
  );
};
export default Copyright;
