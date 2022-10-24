import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // this is a reference to the user model, and creates a relationship between the user and the product
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    rrp: {
      type: Number,
      required: false,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    averageRating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
    numOfReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
