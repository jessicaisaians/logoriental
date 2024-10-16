import { FC } from "react";

interface IconItemProps {
  title: string;
  type?: "heading-3" | "heading-2" | "heading-1" | string;
  icon: React.ReactElement;
  gap?: string;
}

const IconItem: FC<IconItemProps> = ({
  title,
  icon,
  type = "heading-2",
  gap = "gap-[10px]",
}) => {
  return (
    <div className={`${gap} flex items-center`}>
      <div className="flex items-center justify-center h-[21px] w-[21px] aspect-square">
        {icon}
      </div>
      <div className={type}>{title}</div>
    </div>
  );
};
export default IconItem;
