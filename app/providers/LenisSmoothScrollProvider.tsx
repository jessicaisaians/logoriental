"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

interface LenisSmoothScrollProvider {
  children: React.ReactNode;
}
const LenisSmoothScrollProvider: React.FC<LenisSmoothScrollProvider> = ({
  children,
}) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisSmoothScrollProvider;
