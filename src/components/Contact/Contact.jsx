"use client"
import Image from "next/image";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    console.log(form.current)
    emailjs
      .sendForm(
        "service_uzkvpvg",
        "template_a5m3vbr",
        form.current,
        "I54EHbb6_LwYWwU4e"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          Swal.fire({
            icon: "success",
            title: "Message Sent",
            text: "Your message has been sent successfully!",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div class="flex justify-center items-center bg-orange-50">
        <div class="container mx-auto my-4 px-4 lg:px-20">
          <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div class="flex">
              <h1 class="font-bold uppercase text-5xl">
                Send us a <br /> message
              </h1>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              {/* input fild */}
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  class="w-full mt-2 p-3 rounded-lg focus:outline-none"
                  type="text"
                  name="from_name"
                  placeholder="First Name*"
                  required
                />
                <input
                  class="w-full mt-2 p-3 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Last Name*"
                />
                <input
                  class="w-full mt-2 p-3 rounded-lg focus:outline-none"
                  type="email"
                  name="user_email"
                  placeholder="Email*"
                />
                <input
                  class="w-full mt-2 p-3 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Subjuct*"
                />
              </div>

              {/* text area */}
              <div class="my-4">
                <textarea
                  placeholder="Message*"
                  name="message"
                  required
                  class="w-full h-32  mt-2 p-3 rounded-lg focus:outline-none"
                ></textarea>
              </div>
              <div class="my-2 w-1/2 lg:w-1/4">
                <button
                  type="submit"
                  class="uppercase text-sm font-bold tracking-wide bg-orange-300 text-white p-3 rounded-lg w-full 
                      focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-orange-300 rounded-2xl">
            <div class="flex flex-col text-white">
              <h1 class="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>
              <p class="text-gray-100">
                dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt
                arcu diam, eu feugiat felis fermentum id. Curabitur vitae nibh
                viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div class="flex my-4 w-2/3 lg:w-1/2">
                <div class="flex flex-col">
                  <h2 class="text-2xl">Main Office</h2>
                  <p class="text-gray-100">
                    Mirpur north RD, Dhaka 1212, Bangladesh
                  </p>
                </div>
              </div>

              <div class="flex my-4 w-2/3 lg:w-1/2">
                <div class="flex flex-col">
                  <h2 class="text-2xl">Call Us</h2>
                  <p class="text-gray-100">Tel: 018-00000000</p>
                  <p class="text-gray-100">Tel: 018-00000000</p>
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
