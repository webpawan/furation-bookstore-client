import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  quantity: 0,
  amount: 0,
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setRefresh: (state, action) => {
      state.count += 1;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setclear: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const { setRefresh, setQuantity, setAmount } = ProductSlice.actions;

export const getRefresh = (state) => state.product.count;
export const getQuantity = (state) => state.product.quantity;
export const getAmount = (state) => state.product.amount;
