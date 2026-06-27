import { LuSend } from "react-icons/lu";
import { WiTime4 } from "react-icons/wi";
import { FaHeadphones } from "react-icons/fa";

const Section = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-4">
        <h1 className="text-[#272835] text-2xl font-medium">
          Our Specifications
        </h1>
        <div className="flex flex-col text-center gap-3">
          <p className="text-[#898b8a] w-95.5 h-15">
            We offer top-tier service and convenience to ensure your shopping
            experience is smooth, secure and completely hassle-free.
          </p>
        </div>
      </div>
      <div></div>
      <div className="flex flex-col gap-3 justify-center items-center  pt-6 ">
        <div className="flex flex-col pt-8 gap-6 sm:flex-row">
          <div className="bg-[#f0fdf6] relative flex flex-col justify-center items-center text-center pt-4 gap-4 w-100 h-44 rounded-xl">
            <h1 className="text-[#1d293d] text-2xl font-medium">
              Free Shipping
            </h1>
            <p className="w-79.25 h-10 text-[#697188]">
              Enjoy fast, free delivery on every order no conditions, just
              reliable doorstep.
            </p>
            <i className="absolute -top-4 text-2xl text-white border bg-[#0adc71] w-10 h-10 flex justify-center items-center">
              <LuSend />
            </i>
          </div>
          <div className="bg-[#fff8ee] relative flex flex-col justify-center items-center text-center pt-4 gap-4 w-100 h-44 rounded-xl">
            <h1 className="text-[#1d293d] text-2xl font-medium">
              7 Days easy Return
            </h1>
            <p className="w-79.25 h-10 text-[#697188]">
              Change your mind? No worries. Return any item within 7 days.
            </p>
            <i className="absolute -top-4 text-2xl text-white border bg-[#ff8901] w-10 h-10 flex justify-center items-center">
              <WiTime4 />
            </i>
          </div>
          <div className="bg-[#f9f8ff] relative flex flex-col justify-center items-center text-center pt-4 gap-4 w-100 h-44 rounded-xl">
            <h1 className="text-[#1d293d] text-2xl font-medium">
              24/7 Customer Support
            </h1>
            <p className="w-79.25 h-10 text-[#697188]">
              We're here for you. Get expert help with our customer support.
            </p>
            <i className="absolute -top-4 text-2xl text-white border bg-[#a583ff] w-10 h-10 flex justify-center items-center">
              <FaHeadphones />
            </i>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
        <div className="flex flex-col text-center gap-3 pt-20">
          <h1 className="text-[#272835] text-2xl font-medium">
            Join Newsletter
          </h1>
          <p className="text-[#898b8a] w-95.5 h-15">
            Subscribe to get exclusive deals, new arrivals, and insider updates
            delivered straight to your inbox every week.
          </p>
        </div>
        <div className=" flex justify-center items-center pt-4 pl-8 ">
          <input
            className="bg-[#f1f4f9] border outline-2 outline-white border-[#f1f4f9] pl-2 h-13 rounded-xl w-full sm:w-155 sm:flex sm:justify-center sm:items-center sm:h-14 sm:rounded-3xl"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="text-white right-20 w-24 text-xs relative h-11 rounded-xl bg-[#00c94f] sm:right-34 sm:rounded-3xl sm:w-33.5 sm:h-11">
            Get Updates
          </button>
        </div>
      </div>
    </>
  );
};

export default Section;
