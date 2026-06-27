import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const ProductsSell = () => {
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
        <div className="grid grid-cols-2 justify-items-center items-center gap-3 sm:gird sm:grid-cols-4 sm:w-276 sm:h-170">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSell;
