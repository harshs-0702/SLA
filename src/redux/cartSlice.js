import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (exist) {
        exist.qty += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          qty: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      const exist = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (!exist) return;

      if (exist.qty === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        exist.qty -= 1;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;