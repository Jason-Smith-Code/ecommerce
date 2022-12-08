import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../features/products/productDetailSlice";
import { fetchProductDetail } from "../middleware/productActions";
import { Loader } from "../components/Loader/Loader";
import "./ProductPage.css";
import { addToCart } from "../features/products/cartSlice";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [quantity, setQuanity] = useState(1);

  // fetch the product object to display attributes
  const product = useSelector(getProductDetail);

  useEffect(() => {
    // fetch the product object
    dispatch(fetchProductDetail(params.id));
  }, [dispatch, params]);

  // prevent quantity from going less than 1
  const decreaseQuantity = () => {
    if (quantity <= 1) {
      setQuanity(1);
    } else {
      setQuanity(quantity - 1);
    }
  };

  // prevent quantity from going over the current product stock
  const increaseQuantity = () => {
    if (quantity >= product.details.stock) {
      setQuanity(product.details.stock);
    } else {
      setQuanity(quantity + 1);
    }
  };

  // Adding to cart
  const addItemToCart = () => {
    dispatch(addToCart({ id: params.id, orderQuantity: quantity }));
  };

  return (
    <div className="content-container">
      <p>Navigation tree links</p>  
      {product.loading ? (
        <Loader text="Loading products" />
      ) : product.error ? (
        <p>{product.error}</p>
      ) : (
        <div className="product-grid">
          <div className="product-top">
            <img
              alt={product.details.title}
              width="500px"
              src={product.details.image}
            ></img>
          </div>
          <div className="product-details">
            <h1>{product.details.title}</h1>
            <h2>Category: {product.details.category}</h2>
            <p>£{product.details.price}</p>
            <p>{product.details.description}</p>
            <p>
              Status: {product.details.stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p>Rating: {product.details.rating} / 5</p>
            <p>Reviews: {product.details.reviews}</p>
            <div className="add-to-cart-quantity">
              <button
                onClick={decreaseQuantity}
                className="quantity-left quantity-button"
              >
                -
              </button>
              <p className="quantity-number">{quantity}</p>
              <button
                onClick={increaseQuantity}
                className="quantity-right quantity-button"
              >
                +
              </button>
            </div>
            <button onClick={addItemToCart}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};
