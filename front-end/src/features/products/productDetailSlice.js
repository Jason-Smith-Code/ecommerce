import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
  loading: true,
  error: "",
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    productDetailRequest(state, action) {
      state.loading = true;
      state.details = {};
    },
    productDetailSuccess(state, action) {
      state.loading = false;
      state.details = action.payload;
    },
    productDetailFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// function to get the product list
export const getProductDetail = (state) => state.productDetail;

// Action creators are generated for each case reducer function
export const { productDetailRequest, productDetailSuccess, productDetailFail } =
  productDetailSlice.actions;

export default productDetailSlice.reducer;
