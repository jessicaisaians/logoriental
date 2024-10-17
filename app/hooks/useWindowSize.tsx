"use client";
import { useEffect, useState } from "react";

const useWindowSize = (onResize?: (height?: number, width?: number) => any) => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth ?? 1920,
        height: window.innerHeight ?? 1080,
      });
      if (onResize)
        onResize(window.innerHeight ?? 1080, window.innerWidth ?? 192);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
