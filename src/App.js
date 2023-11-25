import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import MainPage from "./components/pages/mainPage/MainPage";
import Categories from "./components/pages/categories/Categories";
import Products from "./components/pages/products/Products";
import Sales from "./components/pages/sales/Sales";
import Footer from "./components/footer/Footer";

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
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
