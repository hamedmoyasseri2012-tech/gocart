import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const ProductsLatest = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center pt-4 ">
      <h1 className="text-2xl font-medium">Latest Products</h1>
      <div className="flex  item-center gap-8">
        <p>Showing 4 of 12 products</p>
        <Link to="shop-page" className="flex gap-2 items-center text-[#36ab62]">
          <p>View More</p>
          <i>
            <FaArrowRight />
          </i>
        </Link>
      </div>
      <div className="grid grid-cols-2 justify-items-center items-center gap-3 sm:grid sm:grid-cols-4 sm:w-276 sm:h-79 sm:justify-center sm:items-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};

export default ProductsLatest;
