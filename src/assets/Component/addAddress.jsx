import { ImCross } from "react-icons/im";
import { Link } from "react-router";

const addAddress = () => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center h-screen  gap-4 ">
        <div className="flex items-start text-start">
          <h1 className="text-[#314158] text-3xl items-start">
            Add New <span className="text-[#314158] font-bold">Address</span>
          </h1>
        </div>
        <input
          className="w-95.5 p-2 h-10 border border-[#e2e8f0] text-[#bdc1c5] "
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          className="w-95.5 p-2 h-10 border border-[#e2e8f0] text-[#bdc1c5] "
          type="text"
          placeholder="Email address"
        />
        <input
          className="w-95.5 p-2 h-10 border border-[#e2e8f0] text-[#bdc1c5] "
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-2">
          <input
            className="w-45.75 p-2 h-10 border border-[#e2e8f0] text-[#bdc1c5] "
            type="text"
            placeholder="City"
          />
          <input
            className="w-45.75 p-2 h-10 border border-[#e2e8f0] text-[#bdc1c5] "
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-2">
          <input
            className="w-45.75 p-2 h-10 border border-[#e2e8f0] text-[#bdc1c5] "
            type="text"
            placeholder="Zip Code"
          />
          <input
            className="w-45.75 p-2 h-10 border border-[#e2e8f0] text-[#bdc1c5] "
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="w-95.5 p-2 h-10 border border-[#e2e8f0] text-[#bdc1c5] "
          type="text"
          placeholder="phone"
        />
        <button className="w-95.5 p-2 h-10 border rounded-xl text-white bg-[#1d2a3d] border-[#1d2a3d] uppercase">
          Save Address
        </button>
      </div>
      <Link to="/cart" className="absolute top-2 right-2">
        <ImCross />
      </Link>
    </div>
  );
};

export default addAddress;
