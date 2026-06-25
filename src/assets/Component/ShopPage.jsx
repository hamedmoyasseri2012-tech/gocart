import Header from "./Header";

const ShopPage = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center">
        <Header />
        <div className="p-2 text-2xl font-medium">
          <h1 className="text-[#324b6c]">
            <span className="text-[#869aae] ">All</span> Products
          </h1>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ShopPage;
