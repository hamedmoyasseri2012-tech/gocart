import { FaChevronRight } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <>
      <div className="flex relative flex-col justify-center items-center pt-6 gap-4 sm:flex-row sm:justify-center sm:items-center">
        <div className="bg-[#b9f7ce] border  sm:w-219 sm:h-119 sm:flex sm:justify-between  border-[#b9f7ce] rounded-xl w-95.75 h-172 flex flex-col pl-4 gap-4 pt-4 justify-start items-start">
          <div className="flex flex-col sm:flex sm:flex-row">
            <div className="gap-6 flex flex-col sm:pt-20 sm:pl-14">
              <div className="border bg-[#7af1a8] border-[#7af1a8] w-fit h-8 rounded-xl  flex justify-center items-center">
                <p className="text-center flex justify-center items-center text-xs text-[#1dab62]">
                  <span className="bg-[#00a73f] rounded-xl font-bold text-white justify-center items-center flex text-center border w-14.25 h-6">
                    News
                  </span>
                  Free Shipping on Orders Above $50!
                </p>
                <i className="text-[#1dab62]">
                  <FaChevronRight />
                </i>
              </div>
              <div className="sm:text-4xl sm:font-semibold sm:h-28 text-3xl w-80 h-18 bg-linear-to-r from-[#45605d] via-[#6b9f79] to-[#84cb77] bg-clip-text text-transparent">
                <h2>Gadgets you'll love. Prices you'll trust.</h2>
              </div>
              <div className="flex flex-col ">
                <p className="text-[#1d293d] text-2xl font-medium">
                  Starts from
                </p>
                <p className="text-[#1d293d] text-4xl font-medium">$4.90</p>
              </div>
              <div className="bg-[#1d2a3d] sm:w-48 sm:h-14 flex justify-center items-center text-white rounded-xl font-medium w-36 h-10">
                <button>Learn More</button>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end -mt-5 sm:-mb-9">
              <img
                className=" w-95.5 h-101 "
                src="./public/hero_model.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="gap-2 flex flex-col sm:gap-4 sm:">
          <div className="bg-[#ffd6a8] flex  sm:w-98.5 sm:h-57 justify-around items-center gap-4 w-95.75 h-48 rounded-2xl">
            <div className="w-40 h-18 flex flex-col gap-4">
              <h2 className="text-4xl bg-liner-to-r from-[#272937] w-40 h-18 to-[#b18254] bg-clip-text ">
                Best Products
              </h2>
              <div className="flex gap-2 items-center bg-liner-to-r from-[#272b32] to-[#8c6a50] ">
                <p className="bg-liner-to-r from-[#272b32] to-[#8c6a50] flex items-center">
                  view More
                </p>
                <i>
                  <IoMdArrowForward />
                </i>
              </div>
            </div>
            <div>
              <img className="w-35 h-35" src="./public/Product1.png" alt="" />
            </div>
          </div>
          <div className="bg-[#bedaff] flex  sm:w-98.5 sm:h-57  justify-around items-center gap-4 w-95.75 h-48 rounded-2xl">
            <div className="w-40 h-18 flex flex-col gap-4">
              <h2 className="text-4xl bg-liner-to-r from-[#272937] w-40 h-18 to-[#b18254] bg-clip-text ">
                20% Discounts
              </h2>
              <div className="flex gap-2 items-center bg-liner-to-r from-[#272b32] to-[#8c6a50] ">
                <p className="bg-liner-to-r from-[#272b32] to-[#8c6a50] flex items-center">
                  view More
                </p>
                <i>
                  <IoMdArrowForward />
                </i>
              </div>
            </div>
            <div>
              <img className="w-35 h-35" src="./public/Product2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
