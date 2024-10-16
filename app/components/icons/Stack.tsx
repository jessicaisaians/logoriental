import { FC } from "react";

interface StackProps {
  fill?: string;
  color?: string;
}

const Stack: FC<StackProps> = ({ color, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      height={21}
      width={21}
      style={{
        userSelect: "none",
        width: "21px",
        height: "21px",
        display: "inline-block",
        fill,
        color,
        flexShrink: 0,
      }}
      color={color}
    >
      <g color={color}>
        <path d="M12,111l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,0,0,0-13.9l-112-64a8,8,0,0,0-7.94,0l-112,64A8,8,0,0,0,12,111ZM128,49.21,223.87,104,128,158.79,32.13,104ZM246.94,140A8,8,0,0,1,244,151L132,215a8,8,0,0,1-7.94,0L12,151A8,8,0,0,1,20,137.05l108,61.74,108-61.74A8,8,0,0,1,246.94,140Z"></path>
      </g>
    </svg>
  );
};
export default Stack;
