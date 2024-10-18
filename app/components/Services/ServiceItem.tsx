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
    <div className="flex flex-col not-last-child:mb-2  pb-1">
      <IconItem
        gap="not-last-child:ml-1.5"
        type="heading-3"
        title={ser.title}
        icon={
          <div className="aspect-square h-[13px] w-[13px] rounded-full bg-purple-50" />
        }
      />
      <div className="flex item-start  not-last-child:ml-1.5">
        <div className="w-[21px] min-w-[21px] ml-1.5 flex items-center justify-center">
          <div className="h-full w-[2px] bg-dark-10"></div>
        </div>
        <p className="role pt-[2px]">{ser.desc}</p>
      </div>
    </div>
  );
};
export default ServiceItem;
