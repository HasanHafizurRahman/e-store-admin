import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/products";

export default async function handler(req, res) {
  const { method } = req;
  //   mongoose.Promise = clientPromise;
  await mongooseConnect();
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    }
    res.json(await Product.find());
  }
  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Product.create({ title, description, price });
    res.json(productDoc);
  }
}
