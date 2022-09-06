import mongoose from "mongoose";
import dotenv from "dotenv";
// import data
import users from "./data/users.js";
import products from "./data/Products.js";
// import models
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

import connectDb from "./config/db.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    // delete all data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // import users
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log(`data added ${sampleProducts}`);
    process.exit(0);
  } catch (error) {
    console.log(`error: ${error}`);
    process.exit(1); // passing in a 1 means failure
  }
};

const destroyData = async () => {
  try {
    // delete all data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    process.exit(0);
  } catch (error) {
    console.log(`error: ${error}`);
    process.exit(1); // passing in a 1 means failure
  }
};

// terminal command to destroy or import data
// node back-end/seeder -d
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
