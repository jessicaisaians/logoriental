"use client";
import { motion } from "framer-motion";
import { FC } from "react";

interface ServiceItemAnimationWrapperProps {
  children: React.ReactNode;
  i: number;
}

const ServiceItemAnimationWrapper: FC<ServiceItemAnimationWrapperProps> = ({
  children,
  i,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};
export default ServiceItemAnimationWrapper;
