import { IoSearchSharp } from "react-icons/io5";
import { Inter } from "next/font/google";

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
              className="w-full h-8 bg-gray-100 rounded-l-md focus:outline-none text-black font-extralight px-3"
            />
          </span>
        </span>
        <button type="submit" className="bg-gray-400 px-3 rounded-r-md">
          <IoSearchSharp />
        </button>
      </form>
    </>
  );
};

export default Search;
