import { createSlice } from "@reduxjs/toolkit";

export const cartDataSlice = createSlice({
  name: "cartData",
  initialState: {
    value: {
      data: JSON.parse(localStorage.getItem("cart")) || [],
      amount: (JSON.parse(localStorage.getItem("cart")) || []).length,
    },
  },
  reducers: {
    addOrder: (state, action) => {
      state.value.data.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.value.data));
      state.value.amount += 1;
    },
    deleteOrder: (state, action) => {
      state.value.data.splice(action.payload, 1);
      localStorage.setItem("cart", JSON.stringify(state.value.data));
      state.value.amount -= 1;
    },
    incrementOrderTotal: (state, action) => {
      state.value.data[action.payload].total += 1;
      localStorage.setItem("cart", JSON.stringify(state.value.data));
    },
    decrementOrderTotal: (state, action) => {
      state.value.data[action.payload].total -= 1;
      localStorage.setItem("cart", JSON.stringify(state.value.data));
    },
    sort: (state, action) => {
      action.payload
        ? state.value.data.sort((a, b) => a.price * a.total - b.price * b.total)
        : state.value.data.sort((a, b) => b.price * b.total - a.price * a.total);
        localStorage.setItem("cart", JSON.stringify(state.value.data));
    },
  },
});

export const {
  addOrder,
  deleteOrder,
  incrementOrderTotal,
  decrementOrderTotal,
  sort,
} = cartDataSlice.actions;

export default cartDataSlice.reducer;
