"use client";
// import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";
import { install } from "resize-observer";

const ResizeObserverProvider = ({ children }: any) => {
  if (typeof window !== "undefined" && !window.ResizeObserver) install();
  return <>{children}</>;
  // return <RadixDirectionProvider dir="rtl">{children}</RadixDirectionProvider>;
};

export default ResizeObserverProvider;
