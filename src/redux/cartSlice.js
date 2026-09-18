import { createSlice } from "@reduxjs/toolkit";

// The cart starts out empty. Each item stored here is a food object
// plus a "quantity" field we add on top of it.
const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // action.payload = { food object, quantity }
    addToCart: (state, action) => {
      const { food, quantity } = action.payload;

      const existingItem = state.items.find((item) => item.id === food.id);

      if (existingItem) {
        // Item is already in the cart, just bump the quantity
        existingItem.quantity += quantity;
      } else {
        // New item, spread the food fields and attach a quantity
        state.items.push({ ...food, quantity });
      }
    },

    // action.payload = food id
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    // action.payload = food id
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // action.payload = food id
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
