import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

// @description :   Fetch all products
// @route :         GET /api/products
// @access :        Public

router.get(
  "/",
  asyncHandler(async (request, response) => {
    const products = await Product.find({});
    // convert the products to json
    response.json(products);
  })
);

// @description :   Fetch single products
// @route :         GET /api/products/:id
// @access :        Public

router.get(
  "/:id",
  asyncHandler(async (request, response) => {
    // get the product by its id
    const product = await Product.findById(request.params.id);

    // check to make sure there is a product
    if (product) {
      // conver the products to json
      response.json(product);
    } else {
      response.status(404);
      throw new Error("Product not found");
    }
  })
);

router.use(async (req, res, next) => {
  console.log("used");
  next();
});

// Delete a product
// Update an existing product

// @description :   Create product
// @route :         PUT /api/products
// @access :        Private

// create a default product
router.put(
  "/",
  asyncHandler(async (request, response) => {
    const product = new Product({
      user: "6317ab8b297116827daa4d5c",
      image: "/images/sonyheadphones1.jpg",
      brand: "brand name",
      category: "default",
      title: "Product Name ",
      description: "description",
      price: 0.0,
      rrp: 0.0,
      stock: 0,
      active: false,
    });
    const createdProduct = await product.save();
    response.status(201).json(createdProduct);
    console.log(response);
  })
);

router.post(
  "/admin/create-product",
  asyncHandler(async (request, response) => {
    console.log("post");
  })
);

export default router;
