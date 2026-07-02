import { Link } from "react-router";
import { useState,useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

const ProductsSell = () => {
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
    <div>
      <div className="flex flex-col gap-5 justify-center items-center pt-4 ">
        <h1 className="text-2xl font-medium">Best Selling</h1>
        <div className="flex  item-center gap-8">
          <p>Showing 8 of 12 products</p>
          <Link
            to="shop-page"
            className="flex gap-2 items-center text-[#36ab62]"
          >
            <p>View More</p>
            <i>
              <FaArrowRight />
            </i>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-2 sm:grid-cols-4 sm:pl-16 ">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="flex flex-col gap-4">
              <div className="border border-white p-3 w-40 h-40 sm:w-60 sm:h-68 rounded-2xl ">
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className=" w-38.5 h-40 sm:w-60 sm:h-68 sm:hover:transition sm:hover:duration-300 sm:hover:scale-105 sm:hover:rounded-xl"
                />
              </div>
              <div className="flex flex-col  gap-1 w-40 h-11 sm:w-60 sm:h-11  ">
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
                  </i>
                  <i>
                    <RiStarSFill />
                  </i>
                  <i>
                    <RiStarSFill />
                  </i>
                  <i>
                    <RiStarSFill />
                  </i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSell;
