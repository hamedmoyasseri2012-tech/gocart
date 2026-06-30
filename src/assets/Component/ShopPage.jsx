// import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import { RiStarSFill } from "react-icons/ri";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?categoryId=2",
        );
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 justify-center pl-2 ">
        <Header />
        <div className="p-2 text-2xl font-medium sm:pl-16">
          <h1 className="text-[#324b6c]">
            <span className="text-[#869aae] ">All</span> Products
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-2 sm:grid-cols-4 sm:pl-16">
          {products.map((product) => (
            <div className="flex flex-col gap-4">
              <div
                key={product.id}
                className="border border-white p-3  w-38.5 h-40 sm:w-60 sm:h-68 rounded-xl "
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className=" w-38.5 h-40 sm:w-60 sm:h-68 sm:hover:transition sm:hover:duration-300 sm:hover:scale-105 sm:hover:rounded-xl"
                />
              </div>
              <div className="flex flex-col  gap-1 w-38 h-11 sm:w-60 sm:h-11  ">
                <div className="flex justify-between items-center text-xs">
                  <h3>{product.title}</h3>
                  <span>${product.price}</span>
                </div>
                <div className="flex gap-1 text-green-600">
                  <i>
                    <RiStarSFill />
                  </i>
                  <i>
                    <RiStarSFill />
                  </i>{" "}
                  <i>
                    <RiStarSFill />
                  </i>{" "}
                  <i>
                    <RiStarSFill />
                  </i>{" "}
                  <i>
                    <RiStarSFill />
                  </i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShopPage;
