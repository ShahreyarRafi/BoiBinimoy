import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-orange-50">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                Send us a <br /> message
              </h1>
            </div>

            <form>
              {/* input fild */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full mt-2 p-3 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="First Name*"
                />
                <input
                  className="w-full mt-2 p-3 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Last Name*"
                />
                <input
                  className="w-full mt-2 p-3 rounded-lg focus:outline-none"
                  type="email"
                  placeholder="Email*"
                />
                <input
                  className="w-full mt-2 p-3 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Subjuct*"
                />
              </div>

              {/* text area */}
              <div className="my-4">
                <textarea
                  placeholder="Message*"
                  className="w-full h-32  mt-2 p-3 rounded-lg focus:outline-none"
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-orange-300 text-white p-3 rounded-lg w-full 
                      focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-orange-300 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>
              <p className="text-gray-100">
                dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt
                arcu diam, eu feugiat felis fermentum id. Curabitur vitae nibh
                viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="text-gray-100">
                    Mirpur north RD, Dhaka 1212, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-100">Tel: 018-00000000</p>
                  <p className="text-gray-100">Tel: 018-00000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
