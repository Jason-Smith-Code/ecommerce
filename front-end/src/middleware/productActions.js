import {
  productListRequest,
  productListSuccess,
  productListFail,
} from "../features/products/productsSlice";
import {
  productDetailRequest,
  productDetailSuccess,
  productDetailFail,
} from "../features/products/productDetailSlice";
import axios from "axios";

// fetch products from database
export const fetchProductList = () => async (dispatch) => {
  try {
    // dispatch the request
    dispatch(productListRequest());
    // store the data from the api
    const { data } = await axios.get("/api/products");
    // dispatch the data
    dispatch(productListSuccess(data));
  } catch (error) {
    // dispatch the error, if there is an error response display that, otherwise display the error message
    dispatch(
      productListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// fetch product detail from database
export const fetchProductDetail = (id) => async (dispatch) => {
  try {
    // dispatch the request
    dispatch(productDetailRequest(id));
    // store the data from the api
    const { data } = await axios.get(`/api/products/${id}`);
    // dispatch the data
    dispatch(productDetailSuccess(data));
  } catch (error) {
    // dispatch the error, if there is an error response display that, otherwise display the error message
    dispatch(
      productDetailFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
