import React, { useEffect } from "react";
import { fetchProductList } from "../features/products/productActions";
import { getProductList } from "../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../components/product/ProductList";

export const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector(getProductList);

  useEffect(() => {
    // since this page is displaying products, we need to fetch them
    dispatch(fetchProductList());
  }, [dispatch]);

  // map through products, if product.featured === true then display the product
  const mappedProductList = productList.map((product) => {
    return <ProductList key={product._id} product={product} />;
  });

  return (
    <div className="content-container">
      <section>
        <h1>Store Name</h1>
        <p>Some text about the business</p>
      </section>
      <section>
        <h2>Featured products</h2>
        <div className="products-grid">{mappedProductList}</div>
      </section>
    </div>
  );
};
