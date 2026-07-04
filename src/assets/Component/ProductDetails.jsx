import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Alert from "./Alert";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);

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
      <div className="flex flex-col justify-center items-center">
        <img src={product.images?.[0]} alt={product.title} width={300} />

        <h1>{product.title}</h1>

        <h2>${product.price}</h2>

        <p>{product.description}</p>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
