import { createSlice } from '@reduxjs/toolkit';

const cartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: cartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(({ id }) => id === newItem.id);

      state.totalQuantity++;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const itemToRemove = state.items.find(item => item.id === id);

      state.totalQuantity--;

      if (itemToRemove.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        itemToRemove.quantity--;
        itemToRemove.totalPrice -= itemToRemove.price;
      }
    },
  },
});



export const cartActions = cartSlice.actions;

export default cartSlice;

