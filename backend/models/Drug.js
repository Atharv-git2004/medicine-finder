const mongoose = require("mongoose");

const drugSchema = new mongoose.Schema({
  brand_name: { type: String, required: true },
  generic_name: String,
  indications_and_usage: String,
  dosage_and_administration: String,
  manufacturer_name: String,
  category: String, // e.g., 'Antibiotics', 'Painkillers'
}, { timestamps: true });

module.exports = mongoose.model("Drug", drugSchema);