import Image from "next/image";
import { FC } from "react";
import IconItem from "./IconItem";
import MapPin from "./icons/MapPin";

interface LocationProps {}

const Location: FC<LocationProps> = ({}) => {
  return (
    <div className="col-span-1 flex flex-col w-full gap-3 items-start justify-center bg-dark-6 px-6 pt-6 rounded-5xl">
      <IconItem
        icon={<MapPin  />}
        title="تهران، ایران"
      />
      <div className="h-[180px] max-w-full w-full md:w-[388px] relative overflow-hidden mt-3">
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
      </div>
    </div>
  );
};
export default Location;
