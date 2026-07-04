import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import ShopPage from "./assets/Component/ShopPage.jsx";
import Cart from "./assets/Component/Cart.jsx";
import Alert from "./assets/Component/Alert.jsx";
import Order from "./assets/Component/Order.jsx";
import addAddress from "./assets/Component/addAddress.jsx";
import ProductDetails from "./assets/Component/ProductDetails.jsx";

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
    path: "/alert",
    Component: Alert,
  },
  {
    path: "/order",
    Component: Order,
  },
  {
    path: "/address",
    Component: addAddress,
  },
  {
    path: "/product/:id",
    Component: ProductDetails,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
