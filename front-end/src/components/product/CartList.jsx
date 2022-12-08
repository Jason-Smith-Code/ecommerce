import './CartList.css';
import React from "react";

export const CartList = ({id, orderQuantity}) => {

    // use the id to find the details of each product

    return (
        <div className="cart-list">  
            <p>Product image</p>             
            <p>Product Title</p>
            <p>Price</p>
            <p>QTY: {orderQuantity}</p>
        </div>
    )
                                                                                                   
}