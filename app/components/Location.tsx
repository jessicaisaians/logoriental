import Image from "next/image";
import { FC } from "react";
import IconItem from "./IconItem";
import MapPin from "./icons/MapPin";

interface LocationProps {}

const Location: FC<LocationProps> = ({}) => {
  return (
    <div className="col-span-1 flex flex-col w-full gap-3 items-start justify-center bg-[var(--dark-6)] px-6 pt-6 rounded-[30px]">
      <IconItem
        icon={<MapPin color="var(--green-40)" fill="var(--green-40)" />}
        title="تهران، ایران"
      />
      <div className="h-[180px] max-w-full w-full md:w-[388px] relative overflow-hidden mt-3">
        <Image
          style={{
            maskImage:
              "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 70%)",
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
