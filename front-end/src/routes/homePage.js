import React, { useEffect } from "react";
import { fetchProductList } from "../middleware/productActions";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../components/product/ProductList";
import { Loader } from "../components/Loader/Loader";
import { getProductList } from "../features/products/productsSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector(getProductList);

  // map through products, if product.featured === true then display the product
  const mappedProductList = productList.products.map((product) => {
    return <ProductList key={product._id} product={product} />;
  });

  useEffect(() => {
    // since this page is displaying products, we need to fetch them
    // at a later ppoint this list needs to be featured products only
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <div className="content-container">
      <section>
        <h1>Store Name</h1>
        <p>Some text about the business</p>
      </section>
      <section>
        <h2>Featured products</h2>
        {productList.loading ? (
          <Loader text="Loading featured products" />
        ) : productList.error ? (
          <p>{productList.error}</p>
        ) : (
          <div className="products-grid">{mappedProductList}</div>
        )}
      </section>
    </div>
  );
};
