import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const submitSalesData = createAsyncThunk(
  "sales/submitSalesData",
  async (saleData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3333/sale/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saleData),
      });
      if (!response.ok) {
        throw new Error("Server responded with an error!");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const salesSlice = createSlice({
  name: "sales",
  initialState: {
    status: null,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(submitSalesData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitSalesData.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitSalesData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default salesSlice.reducer;
