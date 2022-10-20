import React, { useState } from "react";

export const ProductForm = () => {
  // Manage local state
  const [productAttributes, setProductAttributes] = useState({
    title: "",
    description: "",
    images: [],
    coverImage: "",
    brand: "",
    category: "",
    price: 0.0,
    rrp: 0.0,
    quantity: 0,
  });

  const handleSubmit = () => {};

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Enter product title</label>
      <br />
      <input
        name="title"
        type="text"
        value={productAttributes.title}
        onChange={(e) => setProductAttributes({ title: e.target.value })}
      />
      <br />
      <input
        name="description"
        type="text"
        value={productAttributes.description}
        onChange={(e) => setProductAttributes({ description: e.target.value })}
      />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};
