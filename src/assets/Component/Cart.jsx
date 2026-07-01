import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col  sm:flex  sm:flex-row w-full sm:justify-center ">
        <div>
          <div className="flex flex-col gap-2 pl-4 pt-4 sm:pl-24 sm:w-275 ">
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
                <span className="sm:text-center sm:flex sm:justify-center sm:items-center">
                  $29
                </span>
                <div className="hidden sm:flex sm:text-[#fb2c36] sm:text-xl">
                  <i>
                    <RiDeleteBin6Line />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#fdfeff] justify-start items-start p-4 gap-6 border h-135 w-95 ml-10 border-[#e2e8f0] rounded-xl sm:flex sm:mt-28 sm:mr-4 ">
          <h1 className="uppercase font-medium">Payment Summary</h1>
          <p className="text-[#90a1b9]">Payment Method</p>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <input className="text-[#90a1b9] accent-gray-500" type="radio" />
              <label className="text-[#90a1b9]" htmlFor="">
                COD
              </label>
            </div>
            <div className="flex gap-2">
              <input className="text-[#90a1b9] accent-gray-500" type="radio" />
              <label className="text-[#90a1b9]" htmlFor="">
                Stripe Payment
              </label>
            </div>
            <div className="border-b border-gray-300 w-[320px] pb-4"></div>
            <p className="text-[#90a1b9] pt-4">Address</p>
            <select
              className="border w-76.75 h-10 border-[#90a1b9] text-[#90a1b9] mt-4 "
              name=""
              id=""
            >
              <option
                className="text-[#90a1b9] flex justify-center items-center"
                value=""
              >
                Select Address
              </option>
              <option className="text-xs" value="0">
                "John due" "," "New york" "," "NY" "," "10001"
              </option>
            </select>
            <p className="mt-4 text-[#45556c] font-medium">Add Address +</p>
            <div className="border-b border-gray-300 w-[320px] pb-4"></div>
            <div>
              <div className="flex justify-between pt-2">
                <p className="text-[#90a1b9]">Subtotal:</p>
                <span className="text-[#62748e]">$29</span>
              </div>
              <div className="flex justify-between pt-2">
                <p className="text-[#90a1b9]">Shipping:</p>
                <span
                  className="text-[#62748e
]"
                >
                  Free
                </span>
              </div>
              <div className="flex gap-4 pt-4">
                <input
                  className="w-63.25 h-8.5 border rounded-[5px] p-2 border-[#90a1b9]"
                  type="text"
                  placeholder="Coupon Code"
                />
                <button className="w-14 rounded-[5px] h-9 border bg-[#425768] text-xs font-medium text-white ">
                  Apply
                </button>
              </div>
              <div className="border-b border-gray-300 w-[320px] pb-4"></div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="text-[#90a1b9]">Total:</p>
                  <span
                    className="text-[#62748e
]"
                  >
                    $29
                  </span>
                </div>
                <button className="w-full bg-[#425768] font-medium text-white p-2 ">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
