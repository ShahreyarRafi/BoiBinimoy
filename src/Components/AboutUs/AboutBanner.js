"use client";
import {
  Typography,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
  Input,
} from "@material-tailwind/react";
import Image from "next/image";
import { Lora } from "next/font/google";
import { MdOutlineArrowOutward } from "react-icons/md";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const AboutBanner = () => {
  return (
    <div className="rounded-3xl my-3">
      <div className="relative h-full w-full">
        <Image
          width={500}
          height={500}
          src="https://i.postimg.cc/MTy0xy3H/bookshelf-arranged-in-rainbow-pattern-jpg-optimal.jpg"
          alt="image 1"
          className="h-96 w-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/55 rounded-xl">
          <div className="w-3/4 text-center md:w-2/4">
            <div className={lora.className}>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-4xl md:text-5xl lg:text-6xl"
              >
                About Us
              </Typography>
            </div>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-2xl font-light"
            >
              Exchange, buy, sell, and rediscover the magic of books
            </Typography>

            <div className="flex justify-center gap-2">
              <Popover placement="bottom">
                <PopoverHandler>
                  <Button className="bg-orange-500 py-1 px-3 text-black border-2 border-orange-500">
                    Subscribe
                  </Button>
                </PopoverHandler>

                <PopoverContent className="w-96 p-8">
                  <div className={lora.className}>
                    <Typography variant="h4" color="blue-gray" className="mb-6">
                      Newsletter Subscription
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-bold"
                  >
                    Your Email
                  </Typography>
                  <div className="flex gap-2">
                    <Input
                      size="lg"
                      placeholder="name@mail.com"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Button className="bg-orange-500 py-1 px-3 text-black border-2 font-normal border-orange-500">
                      Subscribe
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>

              <Button className=" py-2 px-3 text-white border-2 border-orange-500">
                <span className="flex justify-between items-center gap-2">
                  Explore <MdOutlineArrowOutward />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
