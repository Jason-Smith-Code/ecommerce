import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";

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
// Check: http://expressjs.com/en/guide/error-handling.html

app.use((err, request, res, next) => {
  // May get 200 responses even though there is an error, convert 200 to a 500 response
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    // hide stack information if site is in production mode (NODE_ENV)
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});
