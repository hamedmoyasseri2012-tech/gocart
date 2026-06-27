// import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const ShopPage = () => {
 
  return (
    <>
      <div className="flex flex-col gap-4 justify-center pl-2">
        <Header />
        <div className="p-2 text-2xl font-medium sm:pl-16">
          <h1 className="text-[#324b6c]">
            <span className="text-[#869aae] ">All</span> Products
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid sm:grid-cols-4 sm:w-305.5 sm:h-261 sm:pl-16 ">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
