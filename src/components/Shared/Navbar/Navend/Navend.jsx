import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";

const Navend = () => {
  return (
    <div className="flex items-center gap-2">
      <MdFavoriteBorder />
      <MdOutlineShoppingCart />
      <LuUser2 />
    </div>
  );
};

export default Navend;
