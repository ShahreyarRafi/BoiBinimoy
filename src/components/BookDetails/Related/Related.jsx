"use client";

import Image from "next/image";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles


import "swiper/css/bundle";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Related = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const cardsInfo = [
    {
      id: 1,
      img: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
      title: "BIG MAGIC",
      auther: "by Elizabeth Gilbert",
      color: "#EB5757",
      details:
        "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.",
    },
    {
      id: 2,
      img: "https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg",
      title: "Ten Thousand Skies Above",
      auther: "by Claudia Gray",
      color: "#A4E0EB",
      details:
        "The hunt for each splinter of Paul's soul sends Marguerite racing through a war-torn San Francisco.",
    },
    {
      id: 3,
      img: "https://images-na.ssl-images-amazon.com/images/I/81eI0ExR+VL.jpg",
      title: "A Tale For The Time Being",
      auther: "by Ruth Ozeki",
      color: "#EDB9D6",
      details:
        "In Tokyo, sixteen-year-old Nao has decided there’s only one escape from her aching loneliness and her classmates’ bullying.",
    },
    {
      id: 4,
      img: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
      title: "The Great Gatsby",
      auther: "by F.Scott Fitzgerald",
      color: "#FDCA95",
      details:
        "The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career.",
    },
    {
      id: 5,
      img: "https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg",
      title: "After You",
      auther: "by Jojo Moyes",
      color: "#CBB5E2",
      details:
        "Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent.",
    },
  ];

  return (
    <>
      <div className="min-w-full gap-3 my-36">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={2}
          centeredSlides={false} 
          spaceBetween={1}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {cardsInfo.map((cardInfo) => (
            <SwiperSlide key={cardInfo.id}>
              <div
                style={{ backgroundColor: `${cardInfo.color}` }}
                className="relative flex justify-center p-5 rounded-lg w-full mb-24"
              >
                {/* Book Image */}
                <div className="flex-shrink-0 w-44">
                  <Image
                    src={cardInfo.img}
                    width={500}
                    height={500}
                    alt=""
                    className="absolute top-5 ring-0 w-48 border-none rounded-md shadow-xl transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Book Information */}
                <div className="px-10 text-white">
                  {/* Book title */}
                  <div className="font-semibold text-lg">{cardInfo.title}</div>
                  {/* Auther Name */}
                  <div className="book-author text-sm">
                    by {cardInfo.auther}
                  </div>
                  {/* Reating and Vote */}
                  <div className="flex items-center mt-1">
                    {/* Reating */}
                    <div className="flex items-center text-white text-xl mr-2">
                      <span className="mr-1">&#9733;</span>
                      <span className="mr-1">&#9733;</span>
                      <span className="mr-1">&#9733;</span>
                      <span className="mr-1">&#9733;</span>
                      <span className="mr-1">&#9733;</span>
                    </div>
                    {/* Vote */}
                    <span className="text-sm">1,987 voters</span>
                  </div>
                  {/* Book Description */}
                  <div className="book-sum mt-5 text-sm overflow-hidden line-clamp-3">
                    {cardInfo.details}
                  </div>
                  {/* User action */}
                  <div
                    style={{ color: `${cardInfo.color}` }}
                    className="mt-6 text-center cursor-pointer bg-white  font-semibold p-2 text-sm w-40 rounded-full "
                  >
                    See The Book
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Related;
