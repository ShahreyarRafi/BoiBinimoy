"use client"

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import { FaConnectdevelop } from "react-icons/fa";
import { GiPlatform } from "react-icons/gi";
import { GrAchievement } from "react-icons/gr";
import { Lora } from "next/font/google";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const OurStory = () => {
  return (
    <div className="max-w-6xl mx-auto my-12">
      <Timeline>
        <div className={lora.className}>
          <Typography className="mb-2 text-2xl md:text-3xl lg:text-4xl text-center font-bold">
            From Bookworms to Boi Binimoy
          </Typography>
        </div>

        <Typography className="mb-5 opacity-80 text-xl font-light text-center">
          The Journey of Boi Binimoy
        </Typography>

        <div className="space-y-3">
          <TimelineItem className="h-full">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost">
                <FaConnectdevelop className="h-8 w-8" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <div className={lora.className}>
                  <Typography variant="h6" color="blue-gray">
                    Development Phases
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Once upon a time, amidst towering stacks of unread classics
                  and overflowing bookcases, a group of bookworms dreamt of a
                  different story. We saw shelves gathering dust, book swaps
                  limited to friends, and accessibility concerns leaving
                  passionate readers out of the loop.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          <TimelineItem className="h-full">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="red">
                <GiPlatform className="h-8 w-8" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <div className={lora.className}>
                  <Typography variant="h6" color="blue-gray">
                    Platform Launch
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Our journey wasn&apos;t always smooth sailing. From late nights
                  spent coding to heated debates about features, we navigated
                  uncharted territories, fueled by our shared passion for
                  stories and the desire to democratize access to them.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>

          <TimelineItem className="h-full">
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="green">
                <GrAchievement className="h-8 w-8" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <div className={lora.className}>
                  <Typography variant="h6" color="blue-gray">
                    Significant Achievements
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Today, Boi Binimoy stands as a testament to that passion. It&apos;s
                  not just a platform - it&apos;s a space where books find new homes,
                  stories unfold, and connections blossom. Every exchange, every
                  review, every book read on our platform whispers our story,
                  the story of how a dream of sharing sparked a revolution in
                  the world of books.
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        </div>
      </Timeline>
    </div>
  );
};

export default OurStory;
