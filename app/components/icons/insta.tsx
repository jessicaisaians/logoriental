import { FC } from "react";

interface InstaProps {
  fill?: string;
  color?: string;
  size?: number;
}

const Insta: FC<InstaProps> = ({
  color = "group-hover:stroke-[var(--purple-50)] stroke-[var(--purple-80)] duration-100 transition-all",
  fill = "group-hover:fill-[var(--purple-50)] fill-[var(--purple-80)] duration-100 transition-all",
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      height={size}
      width={size}
      className={`${color} ${fill}`}
      style={{
        userSelect: "none",
        width: size,
        height: size,
        display: "inline-block",

        flexShrink: 0,
      }}
    >
      <g className={`${color}`}>
        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
      </g>
    </svg>
  );
};
export default Insta;
