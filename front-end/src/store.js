import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./features/products/productsSlice";
import productDetailReducer from "./features/products/productDetailSlice";
import cartListReducer from "./features/products/cartSlice";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetail: productDetailReducer,
    cartList: cartListReducer,
  },
});
