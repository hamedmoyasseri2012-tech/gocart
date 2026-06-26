import { SlSocialFacebook } from "react-icons/sl";
import { PiInstagramLogoThin } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4 relative pt-6 pl-4 pr-4 pb-4 justify-between">
          <div>
            <h1 className="text-4xl text-[#2f4259] font-bold">
              <span className="text-[#00a73a]">go</span>cart.
            </h1>
          </div>
          <div>
            <p className="text-[#938f9c] w-95.75 h-20">
              Welcome to gocart, your ultimate destination for the latest and
              smartest gadgets. From smartphones and smartwatches to essential
              accessories, we bring you the best in innovation — all in one
              place.
            </p>
          </div>
          <div className="flex gap-4 pt-8 ">
            <i className="w-7 h-7 bg-[#f1f4fb] border-[#f1f4fb] flex justify-center items-center border rounded-full">
              <SlSocialFacebook />
            </i>
            <i className="w-7 h-7 bg-[#f1f4fb] border-[#f1f4fb] flex justify-center items-center border rounded-full">
              <PiInstagramLogoThin />
            </i>
            <i className="w-7 h-7 bg-[#f1f4fb] border-[#f1f4fb] flex justify-center items-center border rounded-full">
              <CiTwitter />
            </i>
            <i className="w-7 h-7 text-gray-300  bg-[#f1f4fb] flex justify-center items-center border rounded-full">
              <FaLinkedinIn />
            </i>
          </div>
          <div className="flex justify-between  items-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-[#524e74] font-medium">Products</h2>
              <ul className="text-[#7c7f97] font-medium">
                <li>Earphones</li>
                <li>Headphones</li>
                <li>Smartphones</li>
                <li>Laptops</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[#524e74] font-medium">Website</h2>
              <ul className="text-[#7c7f97] font-medium">
                <li>Home</li>
                <li>Privacy policy</li>
                <li>Become Plus Member</li>
                <li>Create your Store</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[#524e74] font-medium">CONTACT</h2>
            <ul className="text-[#7c7f97] flex flex-col gap-2 font-medium ">
              <li>
                <div className="flex gap-2 items-center">
                  <i>
                    <FaRegEnvelope />
                  </i>
                  <p>+1-212-456-7890</p>
                </div>
              </li>
              <li>
                <div className="flex gap-2 items-center">
                  <i>
                    <FaPhoneAlt />
                  </i>
                  <p>contact@example.com</p>
                </div>
              </li>
              <li>
                <div className="flex gap-2 items-center ">
                  <i>
                    <GrLocation />
                  </i>
                  <p>794 Francisco, 94102</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-b-2  border-gray-300 "></div>
        <div className="pl-2 pb-6 justify-start flex items-center">
          <p className="text-[#7c7f97]">
            Copyright 2025 © gocart All Right Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
