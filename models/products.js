const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
});

export const Product = new model("Product", ProductSchema);
