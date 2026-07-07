import axios from "axios";
import { Link } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import { RiStarSFill } from "react-icons/ri";

const ShopPage = () => {
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
      <div className="flex flex-col gap-5 justify-center pl-2 ">
        <Header />
        <div className="p-2 text-2xl font-medium sm:pl-16">
          <h1 className="text-[#324b6c]">
            <span className="text-[#869aae] ">All</span> Products
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

export default ShopPage;
