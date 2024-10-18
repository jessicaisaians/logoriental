import { FC } from "react";

interface DiamondProps {
  fill?: string;
  color?: string;
}

const Diamond: FC<DiamondProps> = ({
  color = "stroke-green-40 duration-100 transition-all",
  fill = "fill-green-40 duration-100 transition-all",
}) => {
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

        flexShrink: 0,
      }}
      className={`${color} ${fill}`}
    >
      <g className={`${color} ${fill}`}>
        <path d="M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z"></path>
      </g>
    </svg>
  );
};
export default Diamond;
