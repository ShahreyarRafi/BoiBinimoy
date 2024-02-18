import { MdOutlineShoppingCart } from "react-icons/md";

import { RxCross2 } from "react-icons/rx";

import Image from "next/image";
import Link from "next/link";



const Cart = () => {
    return (
        <div>

            {/* Drawer cart */}
            <div className="drawer drawer-end">
                <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="cart-drawer" className="drawer-button"><MdOutlineShoppingCart /></label>
                </div>
                <div className="drawer-side z-[2]">
                    <label htmlFor="cart-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-1/3 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            cart?.books?.map(book => <li key={book?._id}><div className='flex items-center justify-between rounded-lg p-2'>
                                <div className="flex gap-5 items-center">
                                    <Image
                                        src={book?.cover_image}
                                        width={70}
                                        height={100}
                                        alt="book"
                                        priority
                                        style={{ width: "70px", height: "100px" }}
                                        className="rounded-md"
                                    />
                                    <div>
                                        <h2 className="font-bold text-lg">{book?.title}</h2>
                                        <h2 className="text-orange-700 font-bold text-lg">{book?.price} BDT</h2>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(book?._id)} className="mt-5 button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1"><RxCross2></RxCross2></button>
                            </div>
                                <hr />
                            </li>)
                        }
                        <li className="mx-auto">
                            <h3 className="text-xl font-bold">Total: {totalPrice}</h3>
                        </li>
                        <li><hr /></li>
                        <li className="mx-auto"><div className="flex gap-5 items-center">
                            <Link href="/cart" className="button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1">View cart</Link>
                            <button className="button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1">Checkout</button>
                        </div></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Cart;