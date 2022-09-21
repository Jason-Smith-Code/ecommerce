import React, { useEffect} from "react";
import { fetchProductList} from "../features/products/productActions";
import {getProductList} from '../features/products/productsSlice'
import { useDispatch, useSelector } from "react-redux";

export const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector(getProductList);

  useEffect(() => {
    dispatch(fetchProductList())
  }, [dispatch])




  return (
    <div className="content-container">
      <section>
        <h1>Store Name</h1>
        <p>products amount = {productList.length}</p>
        <p>Some text about the business</p>
      </section>
      <section>
        <h2>Featured products</h2>
        <div className="products-grid"></div>
      </section>
    </div>
  );
};
