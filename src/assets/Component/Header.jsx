const Header = () => {
  return (
    <>
      <div className="flex relative pt-6 pl-4 pr-4 pb-4 justify-between">
        <div>
          <h1 className="text-4xl text-[#2f4259] font-bold">
            <span className="text-[#00a73a]">go</span>cart.
          </h1>
          <p className="border absolute top-3 left-30 bg-[#00c94f] w-11.5 h-6 text-white flex justify-center items-center rounded-2xl">
            Plus
          </p>
        </div>
        <div>
          <button className="border w-22.5 h-8 bg-[#615fff] rounded-xl text-white border-[#615fff]">
            Login
          </button>
        </div>
      </div>
      <div className="border-b-2 h-2 border-gray-300"></div>
    </>
  );
};

export default Header;
