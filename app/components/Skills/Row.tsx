import { FC } from "react";
import Pill from "../icons/Pill";
import { InteractiveMarquee } from "./Marque";
interface RowProps {
  items: string[];
  speed?: number;
}

const Row: FC<RowProps> = ({ items, speed }) => {
  return (
    <InteractiveMarquee speed={speed}>
      <div className="flex items-center justify-between ">
        {items.map((item) => (
          <div className="flex items-center justify-between" key={item}>
            <div className="h-9 p-3 min-w-fit  mx-1.5 rounded-xl bg-dark-10 flex-nowrap flex items-center justify-center w-max">
              <p className="text-light-60">{item}</p>
            </div>
            <Pill color="stroke-purple-80 fill-purple-80 mx-1.5" />
          </div>
        ))}
      </div>
    </InteractiveMarquee>
  );
};
export default Row;
