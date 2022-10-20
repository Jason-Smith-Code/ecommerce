import './ProductList.css';
import React from "react";
import { Link } from "react-router-dom";
import { Button } from '../button/Button';

export const ProductList = ({product}) => {
    return (
        <div className="product-grid-item">
            <img alt="product" className='product-list-image' src={product.image}></img>
            <h2>{product.title}</h2>
            <p>£{product.price}</p>
            {product.stock === 0 ? <p>out of stock</p> : <p>in stock</p> }
            <div className='product-list-button-row'>
                <Button buttonClass="cart" text="Add"></Button>
                <Link to={`/product/${product._id}`}><Button buttonClass="view" text="View"></Button></Link>
            </div>
        </div>
    )
                                                                                                   
}