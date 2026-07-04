import { useState } from "react";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast";

const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert) return null;

  const handleClaim = () => {
    console.log("clicked");
    toast.success("Coupon copied to clipboard!");
  };
  return (
    <div className="flex justify-between items-center p-2 bg-linear-to-r from-[#8c52ff] via-[#a44bb5] to-[#da705a]">
      <p className="text-white">Get 20% OFF on Your First Order</p>

      <div className="flex gap-2 items-center">
        <button
          onClick={handleClaim}
          className="hidden sm:flex sm:w-32 sm:h-9 justify-center items-center rounded-full bg-white text-black"
        >
          Claim Offer
        </button>

        <button onClick={() => setShowAlert(false)} className="text-white">
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default Alert;
