"use client";
import useWindowSize from "app/hooks/useWindowSize";
import { motion, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

type MarqueeProps = {
  children: React.ReactNode;
  speed?: number; // Custom prop for unique offset delay
};

export const InteractiveMarquee: React.FC<MarqueeProps> = ({
  speed = 0.2,
  children,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const wWidth = width ?? 300;

  // Spring effect for smooth, continuous movement
  const speedSpring = useSpring(wWidth * 2, {
    damping: 40,
    stiffness: 90,
    mass: 5,
  });

  // Trigger animation when the component mounts
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const marqueeWidth = marquee.scrollWidth;

    const startMarquee = () => {
      speedSpring.set(wWidth + marqueeWidth);
      marquee.style.transition = `transform ${
        marqueeWidth / (speed * 100)
      }s linear`;
      marquee.style.transform = `translateX(${-marqueeWidth}px)`;
    };

    // Loop the marquee infinitely
    const resetMarquee = () => {
      marquee.style.transform = `translateX(${-marqueeWidth}px)`;
      marquee.style.transition = "none";
      requestAnimationFrame(() => startMarquee());
    };

    marquee.addEventListener("transitionend", resetMarquee);
    startMarquee();

    // Cleanup event listener
    return () => {
      marquee.removeEventListener("transitionend", resetMarquee);
    };
  }, [speedSpring, speed, wWidth]);

  return (
    <div
      className="overflow-hidden select-none"
      style={{
        direction: "ltr",
        width: "100%",
        maskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <motion.div
        className="flex"
        ref={marqueeRef}
        style={{
          display: "inline-flex",
          whiteSpace: "nowrap",
        }}
      >
        {/* Duplicate the children multiple times to create a continuous effect */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="marquee-item">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
