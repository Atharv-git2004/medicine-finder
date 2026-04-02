const express = require("express");
const router = express.Router();
const { getAllDrugs, addDrug } = require("../controllers/drugController");
const { protect } = require("../middleware/authMiddleware");

// Import the multer configuration you created
const upload = require("../utils/multer"); 

// Route to get all drugs
router.get("/", getAllDrugs);

/**
 * Route to add a drug
 * upload.single('image') handles the file upload. 
 * 'image' is the field name you must use in Postman.
 */
router.post("/add", protect, upload.single("image"), addDrug); 

module.exports = router;