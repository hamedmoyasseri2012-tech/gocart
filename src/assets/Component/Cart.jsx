import Header from "./Header";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div>
      <Header />
      <div
        className="flex flex-col  sm:flex  sm:flex-row w-full sm:justify-center "
      >
        <div >
          <div className="flex flex-col gap-2 p-4 sm:pl-24 sm:w-275 ">
            <h1 className="text-2xl font-bold">My Cart</h1>
            <div className="flex gap-2">
              items in your cart
              <Link to="/" className="text-[#4cc283] ">
                <div className="flex gap-2 items-center">
                  <p>Add More</p>
                  <i>
                    <FaArrowRight />
                  </i>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div className="text-[#45556c] flex gap-2  justify-between p-4 font-medium sm:pl-24 ">
              <h1>Product</h1>
              <div className="flex gap-2 sm:p-1 sm:justify-center sm:items-center">
                <h1>Quantity</h1>
                <h1>Total Price</h1>
                <h1 className="hidden sm:flex">Remove</h1>
              </div>
            </div>
            <div className=" flex gap-2 justify-between p-4 ">
              <div className="flex justify-between">
                <div className="flex gap-3 sm:pl-18">
                  <div className="w-18 h-18 border rounded-[5px] bg-[#f1f4f9] border-[#f1f4f9] flex justify-center items-center">
                    <img
                      className="w-10 h-14  rounded-xl"
                      src="./public/product2.png"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#45556c]">Smart watch white</p>
                    <p className="text-[#62748e]">Watch</p>
                    <span className="bg-white text-[#45556c]">$29</span>
                  </div>
                </div>
              </div>
              <div className="flex sm:gap-12 gap-6 pr-6  sm:p-2 justify-center items-center">
                <div className="flex gap-3 border border-[#e6e9eb] items-center justify-center w-19.25 h-9.5">
                  <button>-</button>
                  <span>0</span>
                  <button>+</button>
                </div>
                <span className="sm:text-center sm:flex sm:justify-center sm:items-center">$29</span>
                <div className="hidden sm:flex sm:text-[#fb2c36] sm:text-xl">
                  <i>
                    <RiDeleteBin6Line />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  border h-125 w-90 border-[#e2e8f0] rounded-xl sm:flex "></div>
      </div>
    </div>
  );
};

export default Cart;
