import Alert from "./Alert";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Order = () => {
  return (
    <div>
      <div>
        <Alert />
        <Header />
        <div className="flex flex-col mt-20 ml-4 gap-4">
          <h1 className="text-3xl font-medium">My Orders</h1>
          <div className="flex gap-4">
            <p className="text-[#45556c] text-xl">Showing total 2 orders</p>
            <Link
              className="text-[#00c951] text-xl flex gap-2 items-center"
              to="/"
            >
              <p>Go to home</p>
              <i>
                <FaArrowRight />
              </i>
            </Link>
          </div>
          <div className="flex flex-col ">
            <div className="hidden sm:flex sm:flex-row sm:justify-around sm:ml-4 sm:text-[#505864]  sm:text-xl sm:font-medium sm:items-center">
              <div>Product</div>
              <div>Total Price</div>
              <div>Address</div>
              <div>Status</div>
            </div>
            <div className="flex flex-col gap-4 sm:flex sm:flex-row sm:justify-around sm:items-center ">
              <div>
                <div className="flex gap-3 mt-8">
                  <div className="border bg-[#f1f4f9] w-20 h-24 flex items-center justify-center rounded-xl border-[#f9f3f4]">
                    <img
                      className="w-9.5 h-14"
                      src="./public/product3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-[#45556c] font-medium">
                      Modern Table Lamp
                    </h2>
                    <div className="text-[#62748e] gap-2 flex">
                      <span>$89</span>
                      <span>Qty:1</span>
                    </div>
                    <div>
                      <span className="text-[#45556c]">Fri Aug 22 2025</span>
                    </div>
                    <div>
                      <span className="text-[#00c951]">Rate Product</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <div className="border bg-[#f1f4f9] w-20 h-24 flex items-center justify-center rounded-xl border-[#f9f3f4]">
                    <img
                      className="w-9.5 h-14"
                      src="./public/product4.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-[#45556c] font-medium">
                      Smart Speaker Gray
                    </h2>
                    <div className="text-[#62748e] gap-2 flex">
                      <span>$149</span>
                      <span>Qty:1</span>
                    </div>
                    <div>
                      <span className="text-[#45556c]">Fri Aug 22 2025</span>
                    </div>
                    <div>
                      <span className="text-[#00c951]">Rate Product</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex sm:text-[#62748e] sm:text-center sm:items-center sm:justify-center">
                $214.2
              </div>
              <div className="text-[#62748e] flex flex-col ml-3 mt-6 sm:text-[#62748e]">
                <p>John Doe,123 Main St</p>
                <p>New york,NY10001,USA</p>
                <p>1234567890</p>
              </div>
              <div className="flex justify-center items-center text-center ">
                <div className="text-[#008236] bg-[#dcfce7] border w-20 h-8 border-[#dcfce7] sm:bg-[#f9f3f4] sm:text-[#62748e] sm:rounded-l-2xl sm:rounded-r-2xl sm:w-33.25 sm:list-disc sm:h-7">
                  <span className="w-2 h-2 rounded-full bg-[#4d6894]"></span>
                  delivered
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b h-1 w-100 ml-4 mt-4 border-[#62748e] flex justify-center items-center sm:pb-8  sm:w-350 sm:border-[#e1e4e7]"></div>
        <div className="hidden sm:flex sm:flex-row sm:justify-around sm:ml-4 sm:pt-8 sm:text-[#505864]  sm:text-xl sm:font-medium sm:items-center">
          <div>Product</div>
          <div>Total Price</div>
          <div>Address</div>
          <div>Status</div>
        </div>
        <div className="flex flex-col gap-4 ml-4 sm:flex sm:flex-row sm:justify-around sm:items-center">
          <div>
            <div className="flex gap-3 mt-8">
              <div className="border bg-[#f1f4f9] w-20 h-24 flex items-center justify-center rounded-xl border-[#f9f3f4]">
                <img
                  className="w-9.5 h-14"
                  src="./public/product3.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-[#45556c] font-medium">
                  Modern Table Lamp
                </h2>
                <div className="text-[#62748e] gap-2 flex">
                  <span>$89</span>
                  <span>Qty:1</span>
                </div>
                <div>
                  <span className="text-[#45556c]">Fri Aug 22 2025</span>
                </div>
                <div>
                  <span className="text-[#00c951]">Rate Product</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <div className="border bg-[#f1f4f9] w-20 h-24 flex items-center justify-center rounded-xl border-[#f9f3f4]">
                <img
                  className="w-9.5 h-14"
                  src="./public/product4.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-[#45556c] font-medium">
                  Smart Speaker Gray
                </h2>
                <div className="text-[#62748e] gap-2 flex">
                  <span>$149</span>
                  <span>Qty:1</span>
                </div>
                <div>
                  <span className="text-[#45556c]">Fri Aug 22 2025</span>
                </div>
                <div>
                  <span className="text-[#00c951]">Rate Product</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <div className="border bg-[#f1f4f9] w-20 h-24 flex items-center justify-center rounded-xl border-[#f9f3f4]">
                <img
                  className="w-9.5 h-14"
                  src="./public/product5.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-[#45556c] font-medium">
                  Smart Watch Black
                </h2>
                <div className="text-[#62748e] gap-2 flex">
                  <span>$199</span>
                  <span>Qty:1</span>
                </div>
                <div>
                  <span className="text-[#45556c]">Fri Aug 22 2025</span>
                </div>
                <div>
                  <span className="text-[#00c951]">Rate Product</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex sm:text-[#62748e] sm:text-center">
            $421.6
          </div>
          <div className="text-[#62748e] flex flex-col ml-3 mt-6 sm:text-[#62748e]">
            <p>John Doe,123 Main St</p>
            <p>New york,NY10001,USA</p>
            <p>1234567890</p>
          </div>
          <div className="flex justify-center items-center text-center ">
            <div className="text-[#008236] bg-[#dcfce7] border w-20 h-8 border-[#dcfce7] sm:bg-[#f9f3f4] sm:text-[#62748e] sm:rounded-l-2xl sm:rounded-r-2xl sm:w-33.25 sm:list-disc sm:h-7">
              <span className="w-2 h-2 rounded-full bg-[#4d6894]"></span>
              delivered
            </div>
          </div>
        </div>
        <div className="border-b h-1 w-100 mb-20 ml-4 mt-4 border-[#62748e] flex justify-center items-center text-center sm:border-[#e1e4e7]  sm:text-center sm:flex sm:justify-center sm:items-center sm:w-350"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Order;
