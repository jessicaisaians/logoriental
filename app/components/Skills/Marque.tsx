"use client";
import useWindowSize from "app/hooks/useWindowSize";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const startMarquee = () => {
      const marqueeWidth = marquee.scrollWidth / 2; // Use half the width for seamless scroll
      const duration = marqueeWidth / (speed * 100);
      marquee.style.transition = `transform ${duration}s linear`;
      marquee.style.transform = `translateX(-${marqueeWidth}px)`;
    };

    const resetMarquee = () => {
      marquee.style.transition = "none";
      marquee.style.transform = `translateX(0)`;

      // Start the marquee again
      startMarquee();
    };

    // Start the marquee initially
    startMarquee();

    // Reset the animation after it completes
    marquee.addEventListener("transitionend", resetMarquee);

    // Cleanup event listener
    return () => {
      marquee.removeEventListener("transitionend", resetMarquee);
    };
  }, [speed, wWidth]);

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
        {/* Duplicate the children to create a seamless effect */}
        <div>{children}</div>
        <div aria-hidden="true">{children}</div>
        <div aria-hidden="true">{children}</div>
        {/* Duplicate to ensure seamless scrolling */}
      </motion.div>
    </div>
  );
};
