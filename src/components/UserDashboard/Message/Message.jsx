import Image from "next/image";
import { IoMdNotificationsOutline, IoIosSend } from "react-icons/io";
import { MdAttachFile } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const Message = () => {
  return (
    <div>
      <div>
        {/* headaer  */}
        <div className="px-5 py-2 flex justify-between items-center bg-[#016961]">
          {/* title */}
          <div className="font-semibold text-2xl text-white">Message</div>

          <div className="flex justify-end items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-white">
                <IoMdNotificationsOutline />
              </span>
              <span className="text-2xl text-white">
                <CiSettings />
              </span>
            </div>
            {/* user image */}
            <div>
              <Image
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                className="object-cover h-10 w-10 rounded-full"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        {/* headaer end  */}

        {/* Chatting  */}
        <div className="grid grid-cols-4">
          {/* chat list  */}
          <div className="flex flex-col border-r-2 overflow-y-auto">
            {/* search compt  */}
            <div className="py-4 px-2">
              <div className="flex items-center py-1 px-2 border border-gray-300 rounded-md">
                <span className="pr-2">
                  <CiSearch />
                </span>
                <input
                  type="text"
                  placeholder="search"
                  className="text-xs font-light bg-transparent w-full focus:outline-none"
                />
              </div>
            </div>
            {/* end search compt  */}

            {/* user list  */}
            <div>
              {/* user 1 */}
              <div className="flex py-2 px-2 items-center border-b border-gray-200">
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
                  <p className="text-xs font-light text-gray-500">
                    Lorem, ipsum dolor....
                  </p>
                </div>
              </div>

              {/* user 2 */}
              <div className="border-l-4 border-[#016961]">
                <div className="flex py-2 px-2 items-center border-b border-gray-200">
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
                    <p className="text-xs font-light text-gray-500">
                      Lorem, ipsum dolor....
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end user list  */}
          </div>
          {/* end chat list  */}

          {/* message */}
          <div className="col-span-2 w-full">
            {/* message header */}
            <div className="h-14 shadow-md w-full">
              <div>
                <div className="flex py-2 px-2 items-center border-b border-gray-200">
                  <div className="w-10">
                    <Image
                      src="https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg"
                      className="object-cover h-8 w-8 rounded-full"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="w-full">
                    <h6 className="text-md font-semibold">Ten Thousand</h6>
                    <p className="text-xs font-light text-gray-500">Active</p>
                  </div>
                </div>
              </div>
            </div>
            {/* all message  */}
            <div className="px-5">
              <div className="flex flex-col mt-5">
                <div className="flex justify-end mb-4">
                  <div className="mr-2 py-3 px-4 bg-[#016961] rounded-l-3xl rounded-tr-3xl">
                    <p className="text-xs text-white">
                      Lorem ipsum dolor sit. !
                    </p>
                  </div>
                </div>

                <div className="flex justify-start mb-4">
                  <div className="ml-2 py-3 px-4 bg-gray-400 rounded-r-3xl rounded-tl-3xl">
                    <p className="text-xs text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat at praesentium, aut ullam delectus odio error sit
                      rem. Architecto nulla doloribus laborum illo rem enim
                      dolor odio saepe, consequatur quas?
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mb-4">
                  <div>
                    <div className="mr-2 py-3 px-4 bg-[#016961] rounded-t-3xl rounded-b-xl">
                      <p className="text-xs text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Magnam, repudiandae.
                      </p>
                    </div>

                    <div className="mt-1 mr-2 py-3 px-4 bg-[#016961] rounded-t-xl rounded-bl-3xl">
                      <p className="text-xs text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, reiciendis!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start mb-4">
                  <div className="mr-2 py-3 px-4 bg-gray-400 rounded-t-3xl rounded-br-3xl">
                    <p className="text-xs text-white">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>

              {/* send */}
              <div className="flex items-center py-2 px-3 rounded-lg bg-gray-200">
                <div>
                  <button className="text-xl">
                    <MdAttachFile />
                  </button>
                </div>
                <div className="w-full mx-2">
                  <input
                    className="w-full bg-transparent text-xs font-light focus:outline-none"
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

          {/* right side */}
          <div className="border-l-2 px-5">
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
              <p className="text-xs">owner@gmail.com</p>
            </div>
            <hr className="h-2 my-3" />

            <div>
              <h5 className="text-lg font-light">More</h5>
              <div>
                {/* 1 */}
                <div className="flex py-2 px-2 items-center border-b border-gray-200">
                  <div className="w-10">
                    <Image
                      src="https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg"
                      className="object-cover h-12 w-8"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="w-full pl-2">
                    <h6 className="text-lg font-semibold">After You</h6>
                    <p className="text-xs font-light text-gray-500">
                      - by Jojo Moyes
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex py-2 px-2 items-center border-b border-gray-200">
                  <div className="w-10">
                    <Image
                      src="https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
                      className="object-cover h-12 w-8"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="w-full pl-2">
                    <h6 className="text-lg font-semibold">Great Gatsby</h6>
                    <p className="text-xs font-light text-gray-500">
                      - by F.Scott Fitzgerald
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
