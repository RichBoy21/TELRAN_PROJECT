import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/categoriesSlice";
import products from "./slices/productsSlice";
import sales from "./slices/saleSlice";
import basket from "./slices/basketOrderSendSlice";

export default configureStore({
  reducer: {
    categories,
    products,
    sales,
    basket,
  },
});
