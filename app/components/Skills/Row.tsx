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
            <div className="h-[36px] p-[12px] min-w-fit  mx-[6px] rounded-[12px] bg-[var(--dark-10)] flex-nowrap flex items-center justify-center w-max">
              <p>{item}</p>
            </div>
            <Pill color="stroke-[var(--purple-80)] fill-[var(--purple-80)] mx-[6px]" />
          </div>
        ))}
      </div>
    </InteractiveMarquee>
  );
};
export default Row;
