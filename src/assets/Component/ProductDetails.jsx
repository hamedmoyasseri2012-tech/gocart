import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Alert from "./Alert";
import { RiStarSFill } from "react-icons/ri";
import { GiWorld } from "react-icons/gi";
import { CiCreditCard1 } from "react-icons/ci";
import { MdPersonOutline } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    getProduct();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <Alert />
      <Header />
      {/* <div className="flex items-center gap-2 ">
        <Link to="/">Home</Link>

        <span>/</span>

        <Link to="/shop-page">Products</Link>

        <span>/</span>

        <span>{product.category.name}</span>
      </div> */}
      <div>
        <div
          key={product.id}
          className="flex sm:flex sm:flex-row sm:justify-around sm:items-center flex-col gap-4  pb-4"
        >
          <div className="border border-white pt-4 pl-4 w-95.5 flex justify-center items-center h-100  sm:w-113 sm:h-113 rounded-2xl ">
            <img
              src={product.images?.[0]}
              alt={product.title}
              className=" flex justify-center item w-95.5 h-100 sm:w-113 rounded-xl  sm:h-113 sm:hover:transition sm:hover:duration-300 sm:hover:scale-105 sm:hover:rounded-xl"
            />
          </div>
          <div className="flex flex-col pl-4 gap-2 h-140 w-40 sm:w-60 sm:h-11  ">
            <div className="flex flex-col gap-4 w-95.5 text-xl items-start sm:flex sm:flex-col">
              <h3 className="truncate items-start w-95.5 text-xl font-medium">
                {product.title}
              </h3>
              <span className="flex font-medium">${product.price}</span>
              <div>
                <div className="flex items-start justify-start gap-2 text-green-600">
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
                  <i className="text-gray-500">
                    <RiStarSFill />
                  </i>
                </div>
                <div className="bg-[#1d2a3d] text-white w-38 h-11 rounded-[5px] p-2 flex justify-center items-center text-center">
                  Add to Cart
                </div>
              </div>

              <div className="border-b text-[#d1d5dc] h-1 w-95 pt-4"></div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center  gap-2 w-95.5 h-6">
                  <i className="text-[#62748e] text-xl">
                    <GiWorld />
                  </i>
                  <p className="truncate  text-xl text-[#62748e]">
                    Free shipping worldwide
                  </p>
                </div>
                <div className="flex items-center  gap-2 w-95.5 h-6">
                  <i className="text-[#62748e] text-xl">
                    <CiCreditCard1 />
                  </i>
                  <p className="truncate  text-xl text-[#62748e]">
                    100% Secured Payment
                  </p>
                </div>
                <div className="flex items-center  gap-2 w-95.5 h-6">
                  <i className="text-[#62748e] text-xl">
                    <MdPersonOutline />
                  </i>
                  <p className="truncate  text-xl text-[#62748e]">
                    Trusted by top brands
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 text-[#45556c] ">
                <button>Description</button>
                <button>Reviews</button>
              </div>
              <div className="flex border-b border-[#e2e8f0]  h-1 w-95.5 "></div>
            </div>
            <div>
              <p className="w-95.5 h-6 text-xs pt-4 text-[#45556c]">
                {product.description}
              </p>
            </div>
            <div className="flex items-start gap-2 mt-28">
              <div className="border text-xl rounded-full p-2 border-[#90a1b9]">
                <HiMiniShoppingBag />
              </div>
              <div className="flex flex-col items-start justify-center gap- w-95.5 h-11">
                <p className="text-xs w-40 h-5">Product by HappyShop</p>
                <Link to="/happyshop" className="flex gap-2 items-center">
                  <p className="text-xs text-[#00c951]">view store</p>
                  <i>
                    <FaArrowRight />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
