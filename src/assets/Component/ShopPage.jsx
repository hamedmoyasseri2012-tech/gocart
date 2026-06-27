// import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";

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
      <div className="flex flex-col gap-4 justify-center pl-2">
        <Header />
        <div className="p-2 text-2xl font-medium sm:pl-16">
          <h1 className="text-[#324b6c]">
            <span className="text-[#869aae] ">All</span> Products
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:pl-16">
          {products.map((product) => (
            <div key={product.id} className="border p-3 rounded">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain"
              />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShopPage;
