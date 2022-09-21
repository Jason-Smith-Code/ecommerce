import { productListRequest, productListSuccess, productListFail } from "./productsSlice";
import axios from "axios";

// fetch products from database
export const fetchProductList = () => async (dispatch) => {
    try {
        dispatch({
            type: productListRequest
        });

        const { data } = await axios.get('/api/products');

        dispatch({
            type: productListSuccess,
            payload: data
        });

    } catch (error) {
        
        dispatch({
            type: productListFail,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}