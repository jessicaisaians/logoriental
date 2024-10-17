"use client";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: { staggerChildren: 0.05 },
  },
};

export default function PageWrapperAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial={"hidden"}
        animate="visible"
        exit="hidden"
        className="w-full mx-auto flex flex-col gap-6"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
