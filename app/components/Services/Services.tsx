import { FC } from "react";
import IconItem from "../IconItem";
import Stack from "../icons/Stack";
import { services } from "./data";
import ServiceItem from "./ServiceItem";
import ServiceItemAnimationWrapper from "./ServiceItemAnimationWrapper";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <div className="rounded-5xl gap-[28px] p-8 flex flex-col items-start justify-center relative w-full max-w-full bg-dark-6">
      <IconItem title="خدمات" icon={<Stack />} />
      <div className="flex flex-col gap-4">
        {services.map((ser, i) => (
          <ServiceItemAnimationWrapper i={i} key={ser.title}>
            <ServiceItem ser={ser} />
          </ServiceItemAnimationWrapper>
        ))}
      </div>
    </div>
  );
};
export default Services;
