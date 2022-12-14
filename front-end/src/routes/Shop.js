import { ProductList } from "../components/product/ProductList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../middleware/productActions";
import { getProductList } from "../features/products/productsSlice";
import "../assets/svg/filter-solid.svg";
import { Loader } from "../components/Loader/Loader";

export const Shop = () => {
  const dispatch = useDispatch();

  const productList = useSelector(getProductList);

  // map through products
  const mappedProductList = productList.products.map((product) => {
    return <ProductList key={product._id} product={product} />;
  });

  // Filter
  // const filteredProductList = productList.filter((product) => { return product._id === product._id; });

  useEffect(() => {
    // since this page is displaying products, we need to fetch them
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <div className="content-container">
      <div>
        <p>Filter</p>
        {/* Add filter icon, animate out on press to full filter tools */}
      </div>
      <div>
        <p>Sort products drop down</p>
        {/* Add sort icon, dropdown menu on press. Sort by price, discount, name, and then by custom attributes */}
      </div>
      <div>
        <h2>Products</h2>
        {productList.loading ? (
          <Loader text="Loading products" />
        ) : productList.error ? (
          <p>{productList.error}</p>
        ) : (
          <div className="products-grid">{mappedProductList}</div>
        )}
      </div>
    </div>
  );
};
