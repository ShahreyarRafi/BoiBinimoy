import { IoSearchSharp } from "react-icons/io5";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Search = () => {
  return (
    <>
      <form className="flex justify-center rounded w-full">
        <span className="w-full">
          <span className={inter.className}>
            <input
              type="text"
              placeholder="Search"
              className="w-full h-8 bg-gray-100 rounded-l-md focus:outline-none text-black font-light px-3"
            />
          </span>
        </span>
        <button type="submit" className="bg-gray-400 px-1 sm:px-3 rounded-r-md">
          <IoSearchSharp />
        </button>
      </form>

      {/* <div className="max-w-3xl mx-auto flex items-center gap-3 hover:bg-gray-300 py-2 px-3 rounded-sm border-b">
        <div>
          <Image
            width={30}
            height={30}
            alt=""
            src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Jibone_Sofolotar_Jonno_Moner_Shokti-_Sabit_Rayhan-40864-298229.jpg"
          />
        </div>
        <div className="w-full">
          <h1 className="font-semibold">Moner Sokti</h1>
          <p className="text-xs text-gray-400">Sabit Raihan</p>
        </div>

        <div className="flex items-center font-light gap-2 min-w-fit">
          <p className="text-sm text-green-600">Insok</p>
          <p className="text-sm text-red-600">(20% off)</p>
          <h3 className="font-semibold">503$</h3>
        </div>
      </div> */}
    </>
  );
};

export default Search;
