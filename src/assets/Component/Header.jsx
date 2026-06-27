import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import { Link } from "react-router";
const Header = () => {
  return (
    <>
      <div className="flex relative pt-6 pl-4 pr-4 pb-4 justify-between sm:pl-24">
        <div>
          <Link to="App" className="text-4xl text-[#2f4259] font-bold">
            <span className="text-[#00a73a] ">go</span>cart.
          </Link>
          <p className="border absolute top-3 left-30 sm:left-52 sm:top-6 bg-[#00c94f] w-11.5 h-6 text-white flex justify-center items-center rounded-2xl">
            Plus
          </p>
        </div>

        <di
          v
          className="sm:flex sm:gap-3 sm:items-center sm:justify-around sm:pr-32  "
        >
          <div className="hidden sm:flex sm:gap-2 sm:items-center sm:justify-center ">
            <ul className="flex gap-2 items-center sm:text-[#796c84]">
              <li>Home</li>
              <li>Shop</li>
            </ul>
            <div className="hidden sm:flex sm:justify-center sm:items-center sm:font-medium sm:border-[#f1f4f9] sm:border sm:rounded-xl sm:bg-[#f1f4f9]">
              <input
                className="pl-6"
                type="text"
                placeholder="Search Products "
              />
              <i className="sm:absolute sm:right-130 sm:text-[#676d79]">
                <CiSearch />
              </i>
            </div>
            <div className="sm:flex sm:items-center sm:justify-center sm:gap-2 sm:relative">
              <div className="sm:flex sm:justify-center sm:items-center sm:text-center  ">
                <i className="sm:text-3xl">
                  <CiShoppingCart />
                </i>
                <span className="sm:border sm:rounded-full sm:absolute sm:-top-1 sm:right-7 sm:text-white sm:text-xs sm:bg-[#554d62] sm:w-4  sm:h-4 sm:flex sm:justify-center sm:items-center ">
                  0
                </span>
              </div>
              <p>Cart</p>
            </div>
          </div>
          <button className="border w-22.5 h-8 bg-[#615fff] rounded-xl text-white border-[#615fff]">
            Login
          </button>
        </di>
      </div>
      <div className="border-b-2 h-2 border-gray-300"></div>
    </>
  );
};

export default Header;
