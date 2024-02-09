import Image from "next/image";
import { IoIosSend, IoMdAdd } from "react-icons/io";
import { MdAttachFile } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";

const Message = () => {
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
    <div className="">
      <div className="mx-3 bg-[#016961] text-white rounded-lg p-5 h-[86vh] mb-10">
        {/* Chatting  */}
        <div className="flex gap-3">
          {/* chat list  */}
          <div className="w-2/5 space-y-3">
            <div className="text-white bg-teal-50/50 rounded-lg py-5">
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
            <div className="bg-teal-50/50 rounded-lg text-white py-5 px-2 ">
              {/* related section title and see more buttonF */}
              <div className="flex justify-between items-center px-2 mb-5">
                {/* title */}
                <h4 className="text-white text-lg font-semibold">Related</h4>
                {/* see more button */}
                <button className="bg-[#016961] text-xs text-white px-2 py-1 rounded-md flex items-center gap-1">
                  <span> See More</span> <FaChevronRight />
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

            {/* user list  */}
            <div className="bg-gray-100/50 backdrop:filter backdrop:blur-lg rounded-lg text-white py-5 px-2 h-[36.5vh]">
              {/* title */}
              <div className="flex justify-between items-center px-2 pb-3">
                <h5 className="text-lg font-semibold">Message</h5>
                <button className="bg-[#016961] text-xs px-2 py-1 rounded-md flex items-center gap-1">
                  <span> New Chat </span>
                  <IoMdAdd />
                </button>
              </div>

              {/* user 1 */}
              <div className="flex py-3 px-2 items-center border-b border-gray-200">
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
                <div className="flex py-3 px-2 items-center border-b border-gray-200">
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
            {/* end user list  */}
          </div>
          {/* end chat list  */}

          {/* message */}
          <div className="relative w-full bg-teal-50/50 rounded-lg h-[82vh]">
            {/* message header */}
            <div className="h-14 shadow-md w-full">
              <div>
                <div className="flex py-2 px-2 items-center">
                  <div className="w-10">
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
              </div>
            </div>
            {/* all message  */}
            <div className="px-5">
              <div className="flex flex-col mt-5">
                <div className="flex justify-end mb-4">
                  <div className="mr-2 py-3 px-4 bg-[#016961] rounded-l-3xl rounded-tr-3xl">
                    <p className="text-white">Lorem ipsum dolor sit. !</p>
                  </div>
                </div>

                <div className="flex justify-start items-end mb-4">
                  <div className="w-14">
                    <Image
                      src="https://pbs.twimg.com/profile_images/737221709267374081/sdwta9Oh.jpg"
                      className="object-cover h-8 w-8 rounded-full"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="ml-2 py-3 px-4 bg-teal-600 rounded-r-3xl rounded-tl-3xl">
                    <p className="text-white">
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
                      <p className="text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Magnam, repudiandae.
                      </p>
                    </div>

                    <div className="mt-1 mr-2 py-3 px-4 bg-[#016961] rounded-t-xl rounded-bl-3xl">
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
                      src="https://pbs.twimg.com/profile_images/737221709267374081/sdwta9Oh.jpg"
                      className="object-cover h-8 w-8 rounded-full"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className=" py-3 px-4 bg-teal-600 rounded-t-3xl rounded-br-3xl">
                    <p className="text-white">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>

              {/* send */}
              <div className="absolute bottom-3 w-[96%] flex items-center py-2 px-3 rounded-lg bg-white">
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
    </div>
  );
};

export default Message;
