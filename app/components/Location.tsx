"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import IconItem from "./IconItem";
import MapPin from "./icons/MapPin";

interface LocationProps {}
const variants = {
  visible: {
    transform: "translateY(0)",
    transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
  },
  hidden: {
    transform: "translateY(20px)",
  },
};
const Location: FC<LocationProps> = ({}) => {
  return (
    <div className="col-span-1 overflow-hidden flex flex-col w-full not-last-child:mb-3 items-start justify-center bg-dark-6 px-6 pt-6 rounded-5xl">
      <IconItem icon={<MapPin />} title="تهران، ایران" />
      <motion.div
        variants={variants}
        className="h-[180px] max-w-full w-full md:w-[388px] relative overflow-hidden mt-3"
      >
        <Image
          style={{
            maskImage:
              "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 99%)",
          }}
          src={"/images/globe_teh_sm.png"}
          fill
          alt="tehran,IRAN"
          className="object-contain object-bottom"
        />
      </motion.div>
    </div>
  );
};
export default Location;
