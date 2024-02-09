"use client"


import React, { useRef, useEffect, useState } from "react";
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

    observer.observe(statsRef.current);

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={statsRef} className="my-10 px-5">
      <div className="bg-[#016961] text-white rounded-lg md:rounded-full px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            {isVisible && (
              <CountUp start={0} end={764} duration={2.5} separator="," suffix="K">
                {({ countUpRef }) => (
                  <h6 className="text-3xl font-bold lg:text-4xl xl:text-5xl" ref={countUpRef} />
                )}
              </CountUp>
            )}
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Exchange
            </p>
          </div>
          <div className="text-center md:border-r">
            {isVisible && (
              <CountUp start={0} end={388} duration={2.5} separator="," suffix="K">
                {({ countUpRef }) => (
                  <h6 className="text-3xl font-bold lg:text-4xl xl:text-5xl" ref={countUpRef} />
                )}
              </CountUp>
            )}
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Sale
            </p>
          </div>
          <div className="text-center md:border-r">
            {isVisible && (
              <CountUp start={0} end={480} duration={2.5} separator="," suffix="K">
                {({ countUpRef }) => (
                  <h6 className="text-3xl font-bold lg:text-4xl xl:text-5xl" ref={countUpRef} />
                )}
              </CountUp>
            )}
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Users
            </p>
          </div>
          <div className="text-center">
            {isVisible && (
              <CountUp start={0} end={45} duration={2.5} separator="," suffix="K">
                {({ countUpRef }) => (
                  <h6 className="text-3xl font-bold lg:text-4xl xl:text-5xl" ref={countUpRef} />
                )}
              </CountUp>
            )}
            <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Writers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
