import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: null,
  error: null,
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (categories, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3333/categories/${categories}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const sendDiscount = (data) => {
//   try {
//     fetch("http://localhost:3333/sale/send ", {
//       method: "POST",
//       body: JSON.stringify(data),
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;