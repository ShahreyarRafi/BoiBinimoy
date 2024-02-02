import React from "react";

const Stats = () => {
  return (
    <div className="my-10 px-5">
      <div class="bg-[#016961] text-white rounded-lg md:rounded-full px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div class="text-center md:border-r">
            <h6 class="text-3xl font-bold lg:text-4xl xl:text-5xl">144K</h6>
            <p class="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Exchange
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-3xl font-bold lg:text-4xl xl:text-5xl">12.9K</h6>
            <p class="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Sale
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-3xl font-bold lg:text-4xl xl:text-5xl">48.3K</h6>
            <p class="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Users
            </p>
          </div>
          <div class="text-center">
            <h6 class="text-3xl font-bold lg:text-4xl xl:text-5xl">24.5K</h6>
            <p class="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base">
              Writer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
