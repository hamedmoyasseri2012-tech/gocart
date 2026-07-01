import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import ShopPage from "./assets/Component/ShopPage.jsx";
import Cart from "./assets/Component/Cart.jsx";
import Product from "./assets/Component/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/shop-page",
    Component: ShopPage,
  },

  {
    path: "/cart",
    Component: Cart,
  },
  {
    path: "/product",
    Component: Product,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
