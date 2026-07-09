import axios from "axios";
import { Link } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import { RiStarSFill } from "react-icons/ri";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { IoMail } from "react-icons/io5";



const HappyShop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5 justify-center  pl-2 ">
        <Header />
        <div className="bg-[#f9fafc] h-116 flex flex-col justify-center text-center pl-16 items-center">
          <i className="text-6xl w-32 h-32 border border-[#f9f3f4] text-[#a8ce3b] bg-white rounded-xl items-center justify-center flex mr-20">
            <HiMiniShoppingBag />
          </i>
          <h1 className="text-2xl font-medium mr-18 mt-4">Happy Shop</h1>
          <p className=" mt-4 mr-16 w-83.5 h-25 text-[#45556c]">
            At Happy Shop, we believe shopping should be simple, smart, and
            satisfying. Whether you're hunting for the latest fashion trends,
            top-notch electronics, home essentials, or unique lifestyle products
            — we've got it all under one digital roof.
          </p>
          <div className="flex gap-2 mt-12 mr-20 text-center text-[#62748e] items-center">
            <i>
              <IoLocation />
            </i>
            <p>
              3rd Floor, Happy Shop , New Building, 123 street , c sector , NY,
              US
            </p>
          </div>
          <div className="flex gap-2 mt-4 mr-20 text-center text-[#62748e] items-center">
            <i>
              <IoMail />
            </i>
            <p>happyshop@example.com</p>
          </div>
        </div>
        <div className="p-2 text-2xl font-medium sm:pl-16">
          <h1>
            Shop <span className="text-[#1d293d]">Products</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:pl-16">
          {products.slice(0, 12).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="flex flex-col gap-4">
                <div className="border border-white p-3 w-40 h-40 sm:w-60 sm:h-68 rounded-2xl">
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-38.5 h-40 sm:w-60 sm:h-68 hover:scale-105 transition duration-300 rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-1 w-40 sm:w-60">
                  <div className="flex justify-between items-center text-xs">
                    <h3>{product.title}</h3>
                    <span>${product.price}</span>
                  </div>

                  <div className="flex gap-1 text-green-600">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HappyShop;
