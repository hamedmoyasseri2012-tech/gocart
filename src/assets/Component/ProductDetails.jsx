import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Alert from "./Alert";
import { RiStarSFill } from "react-icons/ri";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);
  // const item = product.find((item) => item.id === id);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`,
        );

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <Alert />
      <Header />
      <Link to={"/product/${item.id}"}>
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
      </Link>

      <Footer />
    </div>
  );
};

export default ProductDetails;
