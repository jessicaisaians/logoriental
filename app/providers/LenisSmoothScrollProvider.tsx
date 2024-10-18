"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ReactLenis = dynamic(() => import("@studio-freight/react-lenis"), {
  ssr: false,
});
interface LenisSmoothScrollProvider {
  children: React.ReactNode;
}
const LenisSmoothScrollProvider: React.FC<LenisSmoothScrollProvider> = ({
  children,
}) => {
  const [supported, setSupported] = useState(false);
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "scrollBehavior" in document.documentElement.style &&
      window.ResizeObserver
    )
      setSupported(true);
  }, []);
  return (
    <>
      {supported ? (
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.5,
            smoothWheel: true,
            // infinite: true,
            // syncTouch: true,
          }}
        >
          {children}
        </ReactLenis>
      ) : (
        children
      )}
    </>
  );
};

export default LenisSmoothScrollProvider;
