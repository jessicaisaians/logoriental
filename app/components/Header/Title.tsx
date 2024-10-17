"use client";
import { motion } from "framer-motion";
import { Righteous } from "next/font/google";
import { FC } from "react";

interface TitleProps {}
const baumans = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
const variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 30, damping: 5 },
  },
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: "10px",
  },
};
const Title: FC<TitleProps> = ({}) => {
  return (
    <motion.div className="flex flex-col gap-[4px]">
      <motion.h1
        variants={variants}
        className={`${baumans.className} name !text-[22px]`}
      >
        Logoriental
      </motion.h1>
      <motion.p variants={variants} className="role">
        تیم طراحی وب و گرافیک
      </motion.p>
    </motion.div>
  );
};
export default Title;
