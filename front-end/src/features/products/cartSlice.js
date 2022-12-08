import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  loading: true,
  error: "",
};

export const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    cartListRequest(state, action) {
      state.loading = true;
      state.cartItems = [];
    },
    cartListSuccess(state, action) {
      state.loading = false;
      state.cartItems = action.payload;
    },
    cartListFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addToCart(state, action) {
      // if cart already contains the item being added
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (existingItem) {
        // do nothing
      } else {
        state.cartItems.push(action.payload);
      }
    },
    // remove from cart
    // change item quantity
  },
});

// function to get the product list
// export const getProductList = (state) => state.productList.products;
export const getCartList = (state) => state.cartList;

// Action creators are generated for each case reducer function
export const {
  productListRequest,
  productListSuccess,
  productListFail,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
