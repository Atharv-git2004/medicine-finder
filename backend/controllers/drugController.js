const Drug = require("../models/Drug");

exports.getAllDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.status(200).json({
      success: true,
      count: drugs.length,
      data: drugs
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.addDrug = async (req, res) => {
  try {
    const newDrug = await Drug.create(req.body);
    res.status(201).json({ success: true, data: newDrug });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};