import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './features/products/productsSlice'

export const store = configureStore({
  reducer: {
    productList: productListReducer
  },
})