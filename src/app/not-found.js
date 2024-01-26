import Image from "next/image";
import Link from "next/link";
import React from "react";

const notFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <Image
          className="w-screen h-screen object-cover relative"
          src="/404-page.jpg"
          alt="Next.js Logo"
          width={600}
          height={250}
          priority
        />
        <div className="absolute bottom-6 right-[47%] z-10">
          <Link href="/">
            <button className="py-3 px-7 text-black bg-[#FA8DFF] font-extrabold shadow-lg shadow-[#FA8DFF] rounded-full">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default notFoundPage;
