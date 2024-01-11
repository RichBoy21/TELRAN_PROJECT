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
    basketItems: JSON.parse(localStorage.getItem("basketItems")) || [],
    status: "idle",
    error: null,
  },

  reducers: {
    addItem: (state, action) => {
      const { product, counter } = action.payload;

      const isUnique = state.basketItems.find(
        (basketItem) => basketItem.product.id === product.id
      );
      if (!isUnique) {
        state.basketItems.push({ product, counter });
        localStorage.setItem("basketItems", JSON.stringify(state.basketItems));
      } else {
        state.basketItems = state.basketItems.map((basketItem) => {
          if (basketItem.product.id === product.id) {
            return {
              product: product,
              counter: counter,
            };
          }
          return basketItem;
        });
      }
    },
    changeBasketItemCount: (state, action) => {
      const { basketItemId, counter } = action.payload;
      state.basketItems = state.basketItems.map((basketItem) => {
        if (basketItem.product.id === basketItemId) {
          return {
            ...basketItem,
            counter: counter,
          };
        }
        return basketItem;
      });
    },
    removeItem: (state, action) => {
      const { basketItemId } = action.payload;
      state.basketItems = state.basketItems.filter(
        (basketItem) => basketItem.product.id !== basketItemId
      );
      localStorage.setItem("basketItems", JSON.stringify(state.basketItems));
    },
    clearCart: (state) => {
      state.basketItems = [];
      state.status = "idle";
      localStorage.removeItem("basketItems", JSON.stringify(state.basketItems));
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
export const selectedBasketStatus = (state) => state.basket.status;
export const { addItem, removeItem, clearCart, changeBasketItemCount } =
  basketSlice.actions;
export default basketSlice.reducer;
