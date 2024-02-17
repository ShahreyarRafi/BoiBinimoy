"use client";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import PublisherCard from "./PublisherCard";

export default function Publisher() {
  const axiosPublic = useAxiosPublic();
  const { data: publishers = [], isLoading } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/publishers`);
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
        <Slider {...settings}>
          {publishers?.slice(0, 20)?.map((item) => (
            <PublisherCard key={item._id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
