"use client";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright";
import Header from "./components/Header";
import Intro from "./components/intro";
import Location from "./components/Location";
import Services from "./components/Services/Services";
import Skills from "./components/Skills";
const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const item = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  hidden: { opacity: 0, y: -10, scale: 0.9 },
};

export const CoursesMotionVariants = {
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
export const CourseCardsMotionVariants = {
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
export default function Page() {
  return (
    <AnimatePresence>
      <motion.div
        variants={CoursesMotionVariants}
        initial={"hidden"}
        animate="visible"
        exit="hidden"
        className="w-full mx-auto flex flex-col gap-6"
      >
        <motion.section
          variants={CourseCardsMotionVariants}
          transition={{ duration: 0.2 }}
        >
          <Header />
        </motion.section>
        <motion.section
          variants={CourseCardsMotionVariants}
          transition={{ duration: 0.2 }}
        >
          <Intro />
        </motion.section>

        <motion.section
          variants={CourseCardsMotionVariants}
          transition={{ duration: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <Skills />
            <Location />
          </div>
        </motion.section>
        <motion.section
          variants={CourseCardsMotionVariants}
          transition={{ duration: 0.2 }}
        >
          <Services />
        </motion.section>
        <motion.section
          variants={CourseCardsMotionVariants}
          transition={{ duration: 0.2 }}
        >
          <Contact />
        </motion.section>
        <motion.section
          variants={CourseCardsMotionVariants}
          transition={{ duration: 0.2 }}
        >
          <Copyright />
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
}
