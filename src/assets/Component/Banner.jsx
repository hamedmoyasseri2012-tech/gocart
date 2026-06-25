import { FaChevronRight } from "react-icons/fa";


const Banner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-6 gap-2">
        <div className="bg-[#b9f7ce] border border-[#b9f7ce] rounded-xl w-95.75 h-172 flex flex-col pl-2 gap-4 pt-4 justify-start items-start">
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
          <div className="text-3xl w-80 h-18 bg-linear-to-r from-[#45605d] via-[#6b9f79] to-[#84cb77] bg-clip-text text-transparent">
            <h2>Gadgets you'll love. Prices you'll trust.</h2>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
