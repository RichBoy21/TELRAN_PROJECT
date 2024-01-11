import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsAll: [],
  status: null,
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3333/products/all");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.productsAll = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
