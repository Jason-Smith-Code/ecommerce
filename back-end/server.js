import express from "express";
import connectDB from "./config/db.js";
import products from "./data/Products.js";

connectDB();

// initialize express
const app = express();
// get port from env file
const PORT = process.env.PORT || 5000;

// listen on port
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);

// if we get a response then
app.get("/", (request, response) => {
  // send response to front end
  response.send("API is running...");
});

// get products
app.get("/api/products", (request, response) => {
  // convert the products to json
  response.json(products);
});

// get single product
app.get("/api/products/:id", (request, response) => {
  // get the product by its id
  const product = products.find((p) => p._id === request.params.id);
  // conver the products to json
  response.json(product);
});
