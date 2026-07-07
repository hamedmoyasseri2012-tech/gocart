import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Alert from "./Alert";
import { RiStarSFill } from "react-icons/ri";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product, "product ");
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
      <Link to={`/product/1`}>
        <div key={product.id} className="flex flex-col gap-4  pb-4">
          <div className="border border-white pt-4 pl-4 w-95.5 flex justify-center items-center h-100 sm:w-60 sm:h-68 rounded-2xl ">
            <img
              src={product.images?.[0]}
              alt={product.title}
              className=" flex justify-center item w-95.5 h-100 sm:w-60 rounded-xl sm:h-68 sm:hover:transition sm:hover:duration-300 sm:hover:scale-105 sm:hover:rounded-xl"
            />
          </div>
          <div className="flex flex-col pl-4 mb-20 gap-2 w-40 h-11 sm:w-60 sm:h-11  ">
            <div className="flex flex-col gap-4 text-xl items-center">
              <h3 className="truncate pl-24 text-xl font-medium">
                {product.title}
              </h3>
              <div>
                <div className="flex gap-2 text-green-600">
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
              </div>

              <span className="flex items-start justify-start pr-28 font-medium">
                ${product.price}
              </span>
            </div>
            <div className="bg-[#1d2a3d] text-white w-38 h-11 rounded-[5px] p-2 flex justify-center items-center text-center">
              Add to Cart
            </div>
          </div>
        </div>
      </Link>

      <Footer />
    </div>
  );
};

export default ProductDetails;
