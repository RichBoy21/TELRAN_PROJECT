import { Route, Routes } from "react-router-dom";
import "./App.css";

import MainPage from "./components/pages/mainPage/MainPage";
import Categories from "./components/pages/categories/CategoriesAllPage";
import Products from "./components/pages/products/Products";
import Sales from "./components/pages/sales/SalesPage";
import ErrorPage from "./components/pages/errorPage/ErrorPage";
import Layout from "./components/layout/Layout";
import ProductsPage from "./components/pages/categories/productsPage/ProductsByCategoriesIdPage";
import BasketPage from "./components/pages/basketPage/BasketPage";
import SingleProductPage from "./components/pages/singleProduct/SingleProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:id" element={<ProductsPage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProductPage />} />
          <Route path="sales" element={<Sales />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
