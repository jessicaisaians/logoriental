import { motion } from "framer-motion";
import { FC } from "react";
import IconItem from "../IconItem";
import Stack from "../icons/Stack";
import ServiceItem from "./ServiceItem";
import { services } from "./data";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <div className="rounded-[30px] gap-[28px] p-[32px] flex flex-col items-start justify-center relative w-full max-w-full bg-[var(--dark-6)]">
      <IconItem
        title="خدمات"
        icon={<Stack color="var(--green-40)" fill="var(--green-40)" />}
      />
      <div className="flex flex-col gap-4">
        {services.map((ser) => (
          <motion.div
            key={ser.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <ServiceItem ser={ser} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Services;
