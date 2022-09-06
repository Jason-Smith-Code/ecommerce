import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI, {});
    console.log(`connected to database`);
  } catch (err) {
    console.log(err);
  }
}

export default connectDB;
