import React, { useState } from "react";
import "./Forms.css";
// import { sendProduct } from "../../features/products/productActions";

export const ProductForm = () => {
  // Manage local state, these are the attributes we need to send.
  const [productAttributes, setProductAttributes] = useState({
    title: "test submit",
    description: "test submit",
    images: ["/images/sonyheadphones1.jpg"],
    coverImage: "/images/sonyheadphones1.jpg",
    brand: "test submit",
    category: "test submit",
    price: 0.0,
    rrp: 0.0,
    quantity: 0,
    user: "6317ab8b297116827daa4d5c",
  });

  // These methods will update the state properties.
  // function updateForm(value) {
  //   return setProductAttributes((prev) => {
  //     return { ...prev, ...value };
  //   });
  // }

  async function handleSubmit(e) {
    e.preventDefault();
    const newProduct = { ...productAttributes };
    console.log(newProduct);
    let jsonProject = JSON.stringify(newProduct);
    console.log(jsonProject);
    // sendProduct(jsonProject);
  }

  return (
    <form
      method="post"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <p>title: {productAttributes.title}</p>
        <p>description: {productAttributes.description}</p>
        <p>images: {productAttributes.images}</p>
        <p>coverImage: {productAttributes.coverImage}</p>
        <p>Brand: {productAttributes.brand}</p>
        <p>category: {productAttributes.category}</p>
        <p>price: {productAttributes.price}</p>
        <p>rrp: {productAttributes.rrp}</p>
        <p>quantity: {productAttributes.quantity}</p>
        <p>user: {productAttributes.user}</p>
      </div>
      {/* <div className="form-row">
        <div className="form-col-1">
          <label>Title</label>
        </div>
        <div className="form-col-2">
          <input
            name="title"
            type="text"
            placeholder="title"
            value={productAttributes.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-col-1">
          <label>Description</label>
        </div>
        <div className="form-col-2">
          <textarea
            name="description"
            type="text"
            placeholder="description"
            value={productAttributes.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </div> */}
      {/* </div> */}
      <input type="submit" value="Create Product" />
    </form>
  );
};
