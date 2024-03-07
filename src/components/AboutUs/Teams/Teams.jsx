"use client"

import Image from "next/image";

const Teams = () => {
  const teams = [
    {
      img: "https://i.ibb.co/28RvMyT/about1.jpg",
      name: "SIYAM AHMED",
      title: "Front-End Web Developer",
    },
    {
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      name: "Anthony Geek",
      title: "CTO, Lorem Inc.",
    },
    {
      img: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
      name: "Martin Garix",
      title: "Bad boy",
    },
    {
      img: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      name: "Andrew Larkin",
      title: "Backend Developer",
    },
    {
      img: "https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      name: "Benedict Caro",
      title: "Frontend Developer",
    },
    {
      img: "https://i.ibb.co/sH9rW6p/Apon-02.jpg",
      name: "Md Taiatul Islam Apon",
      title: "Frontend Developer",
    },
  ];

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-[#016961]">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <h2 className="mb-2 text-2xl md:text-3xl lg:text-4xl text-center font-bold">
            Meet Our Teams
          </h2>
          <p className="mb-5 opacity-80 text-xl font-light text-center">
            Sed ut perspiciatis unde omnis iste natus error
          </p>
        </div>

        <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team, key) => (
            <div key={key} className="flex flex-col items-center">
              <Image 
                className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                src={team?.img}
                width={100}
                height={100}
                priority
                alt="Member"
              />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">{team.name}</p>
                <p className="text-sm text-gray-800">{team.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
