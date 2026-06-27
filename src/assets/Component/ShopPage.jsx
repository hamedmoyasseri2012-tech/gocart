// import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const ShopPage = () => {
 
  return (
    <>
      <div className="flex flex-col gap-4 justify-center pl-2">
        <Header />
        <div className="p-2 text-2xl font-medium">
          <h1 className="text-[#324b6c]">
            <span className="text-[#869aae] ">All</span> Products
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
