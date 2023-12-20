import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendOrderData = createAsyncThunk(
  "basket/sendOrderData",
  async (basketData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3333/order/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(basketData),
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

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketItems: [],
    status: "idle",
    error: null,
  },

  reducers: {
    addItem: (state, action) => {
      state.basketItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.basketItems = state.basketItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.basketItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(sendOrderData.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(sendOrderData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addItem, removeItem, clearCart } = basketSlice.actions;
export default basketSlice.reducer;
