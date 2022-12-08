import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: true,
  error: "",
};

export const productsSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    productListRequest(state, action) {
      state.loading = true;
      state.products = [];
    },
    productListSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    productListFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// function to get the product list
// export const getProductList = (state) => state.productList.products;
export const getProductList = (state) => state.productList;

// Action creators are generated for each case reducer function
export const { productListRequest, productListSuccess, productListFail } =
  productsSlice.actions;

export default productsSlice.reducer;
