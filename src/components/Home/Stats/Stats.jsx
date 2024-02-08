"use client"

import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="my-10 px-5" ref={statsRef}>
      <div className="bg-[#016961] text-white rounded-lg md:rounded-full px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            <h6 className="text-3xl font-bold lg:text-4xl xl:text-5xl">
              {isVisible && <CountUp end={144000} duration={2} />}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Exchange
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-3xl font-bold lg:text-4xl xl:text-5xl">
              {isVisible && <CountUp end={12900} duration={2} />}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Sale
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-3xl font-bold lg:text-4xl xl:text-5xl">
              {isVisible && <CountUp end={48300} duration={2} />}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Users
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold lg:text-4xl xl:text-5xl">
              {isVisible && <CountUp end={24500} duration={2} />}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Writer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
