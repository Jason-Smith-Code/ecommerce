import React, {useState, useEffect} from "react";
import axios from 'axios'
import { params } from "react-router-dom";

export const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const params = params()
  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/product/${params.id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [])

  // const product = products.find(p => p._id === params.id)

  return (
    <div className="content-container">
      <p>Navigation tree links</p>
      <div className="product-grid">
        <div className="product-top">
          <img alt={product.title} width="500px" src={product.image}></img>
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <h2>{product.category}</h2>
          <p>Price: £{product.price}</p>
          <p>{product.description}</p>
          <p>Status: {product.quantity > 0 ? "In stock" : "Out of stock"}</p>
          <p>Rating: {product.rating} / 5 : {product.reviews} reviews</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};


