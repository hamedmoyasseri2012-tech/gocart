import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import ShopPage from './assets/Component/ShopPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/shop_page",
    Component: ShopPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
