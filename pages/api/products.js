import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/products";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;
  //   mongoose.Promise = clientPromise;
  await mongooseConnect();
  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Product.create({ title, description, price });
    res.json(productDoc);
  }
}
