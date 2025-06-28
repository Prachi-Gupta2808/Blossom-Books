"use client";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const children = Array.from(scrollerRef.current.children);
      children.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current.appendChild(clone);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);

      setStart(true);
    }
  }, []);

  return (
    <div className="px-6 py-12">
      <h2
        className="text-3xl font-semibold text-center mb-8 text-[#4a3f35]"
        style={{ fontFamily: "Rosarivo, serif" }}
        data-aos="fade-up"
      >
        Ink & Impressions
      </h2>

      <div
        ref={containerRef}
        className={`group scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
      >
        <ul
          ref={scrollerRef}
          className={`flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 ${
            start ? "animate-scroll" : ""
          }`}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-[#3e4a4a] bg-gradient-to-br from-[#6c8e88] to-[#1f2c2d] px-8 py-6 md:w-[450px] text-white shadow-md"
            >
              <blockquote>
                <span
                  className="relative z-20 text-sm leading-[1.6] font-normal text-white"
                  style={{ fontFamily: "Rosarivo, serif" }}
                >
                  {item.quote}
                </span>
                <div className="relative z-20 !mt-1 flex flex-col gap-1">
                  <span className="text-sm font-medium text-[#c9d1cc]">
                    {item.name}
                  </span>
                  <span className="text-sm font-normal text-[#a7b3ac]">
                    {item.title}
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
