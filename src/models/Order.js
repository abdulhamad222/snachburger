import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: String,
    burger: String,
    address: String,
    phone: String,
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model("Order", orderSchema);