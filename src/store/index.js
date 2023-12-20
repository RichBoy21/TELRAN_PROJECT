import { configureStore } from "@reduxjs/toolkit";
import getReducer from "./slices/categoriesSlice";
import getProducts from "./slices/productsSlice";
import submitSalesData from "./slices/saleSlice";
import sendBasketOrder from "./slices/basketOrderSendSlice";

export default configureStore({
  reducer: {
    categories: getReducer,
    products: getProducts,
    sales: submitSalesData,
    basket: sendBasketOrder,
  },
});
