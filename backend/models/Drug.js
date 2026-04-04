const mongoose = require("mongoose");

const drugSchema = new mongoose.Schema({
  brand_name: { type: String, required: true },
  category: String,
  price: Number,
  stock: Number,
  expiryDate: Date,
  description: String,
  image: String,
}, { timestamps: true });;

module.exports = mongoose.model("Drug", drugSchema);