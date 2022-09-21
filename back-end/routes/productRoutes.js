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
      response.status(404).json({ message: "product agasgadg dnot found" });
    }
  })
);

export default router;
