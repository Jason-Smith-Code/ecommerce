import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
import {notFound, errorHandler} from './middleware/handleErrors.js';
dotenv.config();

connectDB();

// initialize express
const app = express();

// get port from env file or set it to a default port
const PORT = process.env.PORT || 5000;

// listen on port, confirm listen with a console log
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);

app.use("/api/products", productRoutes);

// if we get a response then
app.get("/", (request, response) => {
  // send response to front end
  response.send("API is running...");
});

// Error middleware - must be written last.
app.use(notFound)

app.use(errorHandler);
