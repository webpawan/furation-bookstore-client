import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ProductDetail: {},
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setProductDetail: (state, action) => {},
  },
});

export default ProductSlice.reducer;
export const { setProductDetail } = ProductSlice.actions;

export const getProductDetail = (state) => state.Product.ProductDetail;
