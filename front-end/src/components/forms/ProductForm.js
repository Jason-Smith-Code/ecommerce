import React, { useState } from "react";
import "./Forms.css";

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
  function updateForm(value) {
    return setProductAttributes((prev) => {
      return { ...prev, ...value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newProduct = { ...productAttributes };
    console.log(newProduct);

    // reset form
    setProductAttributes({
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
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="form-row">
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
        </div>
      </div>

      {/* <div className="form-row">
        <div className="form-col-1">
          <label>Category</label>
        </div>
        <div className="form-col-2">
          <select
            name="category"
            type="text"
            placeholder="category"
            value={productAttributes.category}
            onChange={(e) => setProductAttributes({ category: e.target.value })}
          >
            <option value="cat1">Category 1</option>
            <option value="cat2">Category 2</option>
            <option value="cat3">Category 3</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-col-1">
          <label>Brand</label>
        </div>
        <div className="form-col-2">
          <select
            name="category"
            type="text"
            placeholder="category"
            value={productAttributes.brand}
            onChange={(e) => setProductAttributes({ brand: e.target.value })}
          >
            <option value="cat1">Brand 1</option>
            <option value="cat2">Brand 2</option>
            <option value="cat3">Brand 3</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-col-1">
          <label>price</label>
        </div>
        <div className="form-col-2">
          <input
            name="price"
            type="number"
            placeholder="0.00"
            value={productAttributes.price}
            onChange={(e) => setProductAttributes({ price: e.target.value })}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-col-1">
          <label>rrp</label>
        </div>
        <div className="form-col-2">
          <input
            name="rrp"
            type="number"
            placeholder="0.00"
            value={productAttributes.rrp}
            onChange={(e) => setProductAttributes({ rrp: e.target.value })}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-col-1">
          <label>stock</label>
        </div>
        <div className="form-col-2">
          <input
            name="stock"
            type="number"
            placeholder="0.00"
            value={productAttributes.stock}
            onChange={(e) => setProductAttributes({ stock: e.target.value })}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-col-1">
          <label>active?</label>
        </div>
        <div className="form-col-2">
          <input
            name="true"
            type="radio"
            value={productAttributes.active}
            onChange={(e) => setProductAttributes({ active: e.target.value })}
          />
        </div>
      </div> */}

      <input type="submit" value="Create Product" />
    </form>
  );
};
