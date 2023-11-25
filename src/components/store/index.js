import { configureStore } from "@reduxjs/toolkit";
import getReducer from "./slices/categoriesSlice";

export default configureStore({
  reducer: {
    categories: getReducer,
  },
});
