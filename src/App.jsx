import Swiper from "./assets/Component/Swiper";
import Banner from "./assets/Component/Banner";
import Header from "./assets/Component/Header";
import Section from "./assets/Component/Section";
import Footer from "./assets/Component/Footer";
import ProductsLatest from "./assets/Component/ProductsLatest";
import ProductsSell from "./assets/Component/ProductsSell";

const App = () => {
  return (
    <>
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
