"use client";
import { motion } from "framer-motion";
import { FC } from "react";

interface SectionAnimationWrapperProps {
  children: React.ReactNode;
}
const variants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
};
const SectionAnimationWrapper: FC<SectionAnimationWrapperProps> = ({
  children,
}) => {
  return (
    <motion.section variants={variants} transition={{ duration: 0.2 }}>
      {children}
    </motion.section>
  );
};
export default SectionAnimationWrapper;
