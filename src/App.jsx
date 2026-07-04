import Swiper from "./assets/Component/Swiper";
import Banner from "./assets/Component/Banner";
import Header from "./assets/Component/Header";
import Section from "./assets/Component/Section";
import Footer from "./assets/Component/Footer";
import ProductsLatest from "./assets/Component/ProductsLatest";
import ProductsSell from "./assets/Component/ProductsSell";
import Alert from "./assets/Component/Alert";
import { Toaster } from "react-hot-toast";


const App = () => {


  
  return (
    <>
      <Toaster position="top-center" />
      <Alert />
      <Header />
      <Banner />
      <Swiper />
      <ProductsLatest />
      <ProductsSell />
      <Section />
      <Footer />
    </>
  );
};

export default App;
