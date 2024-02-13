"use client";

import Image from "next/image";
import { IoIosSend, IoMdAdd } from "react-icons/io";
import { MdAttachFile } from "react-icons/md";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Message = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  const cardsInfo = [
    {
      id: 1,
      img: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
      title: "BIG MAGIC",
      auther: "Elizabeth Gilbert",
    },
    {
      id: 2,
      img: "https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg",
      title: "Ten Thousand Skies Above",
      auther: "Claudia Gray",
    },
    {
      id: 3,
      img: "https://images-na.ssl-images-amazon.com/images/I/81eI0ExR+VL.jpg",
      title: "A Tale For The Time Being",
      auther: "Ruth Ozeki",
    },
    {
      id: 4,
      img: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
      title: "The Great Gatsby",
      auther: "F.Scott Fitzgerald",
    },
    {
      id: 5,
      img: "https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg",
      title: "After You",
      auther: "Jojo Moyes",
    },
  ];

  return (
    <div className="max-w-[1800px] mx-3 bg text-white rounded-lg p-5 h-[86vh] mb-10">
      {/* Chatting  */}
      <div className="flex gap-3">
        <div className="w-2/5 space-y-3 pr-1 overflow-y-scroll">
          <div className="text-white bg-teal-50/15 rounded-lg py-5">
            <div className="flex justify-center my-3">
              <Image
                src="https://pbs.twimg.com/profile_images/737221709267374081/sdwta9Oh.jpg"
                className="object-cover h-28 w-28 rounded-full"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="text-center">
              <h5 className="text-2xl font-semibold">Atikul Islam</h5>
              <p className="text-xs">1K Exchange | 3.5K Seal</p>
            </div>
          </div>

          {/* related section */}
          <div className="bg-teal-50/15 rounded-lg text-white py-5 px-2 ">
            {/* related section title and see more buttonF */}
            <div className="flex justify-between items-center px-2 mb-5">
              {/* title */}
              <h4 className="text-white text-lg font-semibold">Related</h4>
              {/* see more button */}
              <button className="text-white rounded-sm text-lg">
                <HiArrowTopRightOnSquare />
              </button>
            </div>

            {/* related book card */}
            <div className="flex justify-center items-center gap-5">
              {cardsInfo.map((cardInfo) => (
                <div key={cardInfo.id} className="w-16">
                  <Image
                    src={cardInfo.img}
                    className="object-cover h-24 w-16 rounded-sm"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Chat list  */}
          <div className="bg-teal-50/15 rounded-lg text-white py-5 px-2 h-full">
            {/* chat list header */}
            <div className="flex items-center gap-2.5 px-2 pb-5">
              <span className="flex items-center border-b-2 w-full">
                <input
                  className="bg-transparent text-white focus:outline-none w-full px-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                />
                <button className="text-2xl">
                  <CiSearch />
                </button>
              </span>
              <button className="text-white rounded-sm text-2xl">
                <IoMdAdd />
              </button>
            </div>

            {/* user 1 */}
            <div className="flex py-3 px-2 items-center rounded-md cursor-pointer hover:bg-teal-50/20">
              <div className="w-16">
                <Image
                  src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full pl-2">
                <h6 className="text-lg font-semibold">BIG MAGIC</h6>
                <p className="text-xs font-light">Lorem, ipsum dolor....</p>
              </div>
            </div>

            {/* user 2 */}
            <div className="">
              <div className="flex py-3 px-2 items-center rounded-md cursor-pointer hover:bg-teal-50/20">
                <div className="w-16">
                  <Image
                    src="https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg"
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="w-full pl-2">
                  <h6 className="text-lg font-semibold">Ten Thousand</h6>
                  <p className="text-xs font-light">Lorem, ipsum dolor....</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* message */}
        <div className="relative w-full bg-teal-50/15 rounded-lg h-[82vh]">
          {/* message header */}
          <div className="shadow-md w-full px-4 py-1 flex justify-between items-center bg-teal-50/20 rounded-t-lg">
            <div className="flex py-2 px-2 items-center">
              <div className="w-14">
                <Image
                  src="https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg"
                  className="object-cover h-10 w-10 rounded-full"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full text-white ml-3">
                <h6 className="text-md font-semibold">Ten Thousand</h6>
                <p className="text-xs font-light">Active</p>
              </div>
            </div>

            <div>
              <button onClick={handleOpen} className="text-2xl">
                <IoInformationCircleOutline />
              </button>

              {/* Dailog start */}
              <Dialog
                className="bg-black/50 h-screen"
                open={open}
                handler={handleOpen}
              >
                <div className="max-w-sm mx-auto rounded-lg mt-28 bg-white">
                  <DialogHeader className="justify-between">
                    <div className="text-xl font-bold">Chat Info</div>
                    <div>
                      <button
                        onClick={handleOpen}
                        className="hover:bg-gray-300 p-1 rounded-md"
                      >
                        <AiOutlineClose />
                      </button>
                    </div>
                  </DialogHeader>

                  <DialogBody className="flex justify-center gap-3">
                    <div>
                      <Image
                        src="https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg"
                        width={500}
                        height={500}
                        alt=""
                        className="w-36 rounded-md shadow-xl"
                      />
                    </div>
                    <div>
                      <h2 className="text-4xl">Book Title</h2>
                      <p className="text-xs pt-1">
                        by{" "}
                        <span className="font-bold text-sm">
                          Book auther name
                        </span>
                      </p>
                      <p className="text-3xl py-1">
                        30.99
                        <span className="text-xs font-bold">$</span>
                      </p>
                      <p className="text-xs font-bold py-1">
                        Category: Fiction
                      </p>
                      <p className="text-xs font-bold py-1">Page: 190</p>
                      <p className="text-xs font-bold py-1">Condition: New</p>
                      <p className="text-xs font-bold py-1">City: Dhaka</p>
                    </div>
                  </DialogBody>

                  <DialogFooter className="justify-between gap-2">
                    <button className="bg-[#016961] w-full py-3 rounded-lg text-white font-bold">
                      Learn More
                    </button>
                  </DialogFooter>
                </div>
              </Dialog>
              {/* Dailog end */}
            </div>
          </div>

          {/* all message  */}
          <div className="px-5">
            <div className="flex flex-col mt-5">
              <div className="flex justify-end mb-4">
                <div className="mr-2 py-3 px-4 bg-[#016961] rounded-lg">
                  <p className="text-white">Lorem ipsum dolor sit. !</p>
                </div>
              </div>

              <div className="flex justify-start items-end mb-4">
                <div className="w-14">
                  <Image
                    src="https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg"
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="ml-2 py-3 px-4 bg-teal-600 rounded-lg">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat at praesentium, aut ullam delectus odio error sit
                    rem. Architecto nulla doloribus laborum illo rem enim dolor
                    odio saepe, consequatur quas?
                  </p>
                </div>
              </div>

              <div className="flex justify-end mb-4">
                <div>
                  <div className="mr-2 py-3 px-4 bg-[#016961] rounded-lg">
                    <p className="text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Magnam, repudiandae.
                    </p>
                  </div>

                  <div className="mt-1 mr-2 py-3 px-4 bg-[#016961] rounded-lg">
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis, reiciendis!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-start items-end mb-4">
                <div className="w-10">
                  <Image
                    src="https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg"
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="py-3 px-4 bg-teal-600 rounded-xl">
                  <p className="text-white">Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>

            {/* send */}
            <div className="absolute bottom-0 w-full left-0 flex items-center py-2 px-3 rounded-lg bg-white">
              <div>
                <button className="text-xl text-[#016961]">
                  <MdAttachFile />
                </button>
              </div>
              <div className="w-full mx-2">
                <input
                  className="w-full bg-transparent text-black focus:outline-none"
                  type="text"
                  placeholder="type your message"
                />
              </div>
              <div>
                <button className="text-white text-lg p-2 rounded-full bg-[#016961]">
                  <IoIosSend />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end message  */}
      </div>
    </div>
  );
};

export default Message;
