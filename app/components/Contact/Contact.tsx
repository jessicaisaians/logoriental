import { FC } from "react";
import IconItem from "../IconItem";
import At from "../icons/At";
import Insta from "../icons/insta";
import Phone from "../icons/Phone";
import User from "../icons/User";
import InfoCard from "./InfoCard";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className="rounded-5xl not-last-child:mb-7 p-8 flex flex-col items-start justify-center relative w-full max-w-full bg-dark-6">
      <IconItem
        type="heading-1 !text-[24px]"
        title="با ما در تماس باشید!"
        icon={<User />}
      />
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
        style={{ direction: "ltr" }}
      >
        <InfoCard text="dvin.b@outlook.com" icon={<At />} />
        <InfoCard text="+98 903 40 111 57" icon={<Phone />} />
        <InfoCard
          isLink
          href="https://www.instagram.com/logoriental"
          text="@logoriental"
          icon={<Insta size={21} />}
        />
      </div>
    </div>
  );
};
export default Contact;
