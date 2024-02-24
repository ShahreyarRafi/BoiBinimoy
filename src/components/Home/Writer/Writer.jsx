"use client";

import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import WriterCard from "./WriterCard";
import WriterCardSkeleton from "@/components/Skeleton/WriterCardSkeleton";

export default function Writer() {
  const axiosPublic = useAxiosPublic();
  const { data: writers = [], isLoading } = useQuery({
    queryKey: ["writer"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/writers`);
      return res.data;
    },
  });

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-10 bg-white p-4">
      <div className="slider-container">
        <div className="flex justify-between items-center gap-5 mb-8">
          <h2 className="text-teal-800 text-2xl font-bold">Shop By Writer</h2>
          <Link
            href={"/writers"}
            className="w-[125px] bg-teal-800 hover:bg-teal-600 text-white py-2 rounded-full flex justify-center items-center gap-2"
          >
            View All <MdArrowOutward className="text-xl" />
          </Link>
        </div>
        <Slider {...settings}>
          {isLoading
            ? Array.from(Array(8).keys()).map((index) => (
              <WriterCardSkeleton key={index} />
            ))
            : writers
              ?.slice(0, 20)
              ?.map((item) => <WriterCard key={item._id} item={item} />)}
        </Slider>
      </div>
    </div>
  );
}
