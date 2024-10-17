"use client";
import LogoSvg from "app/components/icons/Logo";
import { motion } from "framer-motion";
import { FC } from "react";
interface LogoProps {}
const variants = {
  visible: {
    opacity: 1,

    transition: { duration: 0.3, type: "spring", stiffness: 30, damping: 5 },
    transform: "rotate(0deg) scale(1)",
  },
  hidden: {
    opacity: 0,

    transform: "rotate(10deg) scale(1.2)",
  },
};
const Logo: FC<LogoProps> = ({}) => {
  return (
    <motion.div
      variants={variants}
      className="h-[60px] w-[68px] rounded-full relative overflow-hidden"
    >
      <LogoSvg />
    </motion.div>
  );
};
export default Logo;
