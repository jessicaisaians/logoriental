import { FC } from "react";
import IconItem from "../IconItem";
import Diamond from "../icons/Diamond";
import Row from "./Row";

interface IndexProps {}

const Index: FC<IndexProps> = ({}) => {
  return (
    <div
      style={{
        boxShadow:
          "0 .6021873017743928px .6021873017743928px -1.25px #0000002e,0 2.288533303243457px 2.288533303243457px -2.5px #00000029,0 10px 10px -3.75px #00000010",
      }}
      className="col-span-1 flex flex-col w-full not-last-child:mb-6 items-start justify-start bg-dark-6 p-6 rounded-5xl"
    >
      <IconItem icon={<Diamond />} title="مهارت‌ها" />
      <div className="flex flex-col not-last-child:mb-4 max-w-full w-full overflow-hidden">
        <Row items={["کار با ابزارهای طراحی", "Photoshop", "Illustrator"]} />
        <Row
          speed={0.24}
          items={["طراحی وب‌سایت", "UX (تجربه کاربری)", "UX (رابط کاربری)"]}
        />
        <Row
          items={["کدنویسی", "توجه به جزیئات", "به‌روز بودن با ترندهای طراحی"]}
        />
      </div>
    </div>
  );
};
export default Index;
