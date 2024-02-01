import Logo from "../Logo/Logo";
import Navend from "./Navend/Navend";
import Navlinks from "./Navlinks/Navlinks";
import Search from "./Search/Search";

const Navbar = () => {
  return (
    <nav className="bg-orange-300 text-white sticky top-0 right-0 z-50">
      {/* nav for md and lg sereen */}
      <div className="max-w-7xl mx-auto py-3 h-28 hidden md:block">
        {/* upper side nav */}
        <div className="flex justify-between items-center py-2 px-5">
          {/* logo */}
          <div className="text-2xl">
            <Logo />
          </div>

          {/* search */}
          <div className="flex-1 px-8">
            <Search />
          </div>

          {/* navend */}
          <div className="text-2xl">
            <Navend />
          </div>
        </div>

        {/* lower side nav */}
        <div className="mt-2">
          {/* nav links */}
          <Navlinks />
        </div>
      </div>

      {/* nav for sm screen */}
      <div className="md:hidden flex justify-between items-center py-2 px-3 w-full">
        <div className="text-xl">
          <Logo />
        </div>
        <div className="flex-1 ml-3">
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
