// import Product from "../models/productModel";

// // @description create a product
// // @route POST /api/products
// // @access Private/Admin

// // create a new product
// const createProduct = asyncHandler(async (req, res) => {
//   const product = new Product({
//     title: "test submit",
//     description: "test submit",
//     images: ["/images/sonyheadphones1.jpg"],
//     coverImage: "/images/sonyheadphones1.jpg",
//     brand: "test submit",
//     category: "test submit",
//     price: 0.0,
//     rrp: 0.0,
//     quantity: 0,
//     user: "6317ab8b297116827daa4d5c",
//   });

//   const createProduct = await product.save();
//   res.status(201).json(product);
// });

// // update a product
// // @description update a product
// // @route POST /api/products/:id
// // @access Private/Admin

// export {createProduct}
