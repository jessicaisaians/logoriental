import { FC } from "react";
import IconItem from "../IconItem";

interface ServiceItemProps {
  ser: {
    title: string;
    desc: string;
  };
}

const ServiceItem: FC<ServiceItemProps> = ({ ser }) => {
  return (
    <div className="flex flex-col gap-[8px] pb-1">
      <IconItem
        gap="gap-[6px]"
        type="heading-3"
        title={ser.title}
        icon={
          <div className="aspect-square h-[13px] w-[13px] rounded-full bg-purple-50" />
        }
      />
      <div className="flex item-start gap-[6px]">
        <div className="w-[32px] flex items-center justify-center">
          <div className="h-full w-[2px] bg-dark-10"></div>
        </div>
        <p className="role pt-[2px]">{ser.desc}</p>
      </div>
    </div>
  );
};
export default ServiceItem;
