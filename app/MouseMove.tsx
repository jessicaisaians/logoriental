"use client";
import { FC, useEffect } from "react";

interface MouseMoveProps {}

const MouseMove: FC<MouseMoveProps> = ({}) => {
  useEffect(() => {
    var cursor: HTMLDivElement | null = document.querySelector(".blob");
    if (!!cursor) {
      const handleMouseMove = (e: any) => {
        var x = e.clientX;
        var y = e.clientY;
        cursor!.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      };
      document.addEventListener("mousemove", handleMouseMove);
    }
  }, []);
  return null;
};
export default MouseMove;
