import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategoriesAll = createAsyncThunk(
  "categories/getCategoriesAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3333/categories/all");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProductsByCategoryId = createAsyncThunk(
  "categories/getProductsByCategoryId",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3333/categories/${categoryId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesAll: [],
    productsByCategoryId: [],
    status: "idle",
    statusProductsByCategoryId: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategoriesAll.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.categoriesAll = action.payload;
      })
      .addCase(getCategoriesAll.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getProductsByCategoryId.pending, (state) => {
        state.statusProductsByCategoryId = "loading";
      })
      .addCase(getProductsByCategoryId.fulfilled, (state, action) => {
        state.statusProductsByCategoryId = "fulfilled";
        state.productsByCategoryId = action.payload;
      })
      .addCase(getProductsByCategoryId.rejected, (state, action) => {
        state.statusProductsByCategoryId = "rejected";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
