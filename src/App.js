import { Route, Routes } from "react-router-dom";
import "./App.css";

import MainPage from "./components/pages/mainPage/MainPage";
import Categories from "./components/pages/categories/CategoriesAllPage";
import Products from "./components/pages/products/Products";
import Sales from "./components/pages/sales/Sales";
import ErrorPage from "./components/pages/errorPage/ErrorPage";
import Loyout from "./components/layout/Layout";
import ProductsPage from "./components/pages/categories/productsPage/ProductsByCategoriesIdPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<MainPage />} />
          <Route path="categories" element={<Categories />}></Route>
          <Route path="categories/:id" element={<ProductsPage />} />
          <Route path="products" element={<Products />} />
          <Route path="sales" element={<Sales />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
