import { configureStore } from "@reduxjs/toolkit";
import getReducer from "./slices/categoriesSlice";
import getProducts from "./slices/productsSlice";

export default configureStore({
  reducer: {
    categories: getReducer,
    products: getProducts,
  },
});
