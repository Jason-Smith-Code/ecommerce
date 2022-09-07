import express from "express";
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js';

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

app.use('/api/products', productRoutes)

// if we get a response then
app.get("/", (request, response) => {
  // send response to front end
  response.send("API is running...");
});

