const Drug = require("../models/Drug");

// Get all drugs from the database
exports.getAllDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.status(200).json({
      success: true,
      count: drugs.length,
      data: drugs
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Create a new drug entry with file upload or image URL
exports.addDrug = async (req, res) => {
  try {
    // Create a copy of the text data from the request body
    let drugData = { ...req.body };

    // Case 1: If a physical file was uploaded via Multer
    if (req.file) {
      drugData.image = `/uploads/${req.file.filename}`;
    } 
    // Case 2: If no file was uploaded, but an image URL was provided in the body
    else if (req.body.image) {
      drugData.image = req.body.image;
    }

    // Save the drug to the database
    const newDrug = await Drug.create(drugData);
    
    res.status(201).json({ 
      success: true, 
      data: newDrug 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message 
    });
  }
};