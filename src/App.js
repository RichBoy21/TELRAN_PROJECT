import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FloatButton } from "antd";

import Header from "./components/header/Header";
import MainPage from "./components/pages/mainPage/MainPage";
import Categories from "./components/pages/categories/Categories";
import Products from "./components/pages/products/Products";
import Sales from "./components/pages/sales/Sales";
import Footer from "./components/footer/Footer";
import ErrorPage from "./components/pages/errorPage/ErrorPage";
import DiscountForm from "./components/pages/mainPage/discountForm/DiscountForm";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
}

export default App;
