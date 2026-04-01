const express = require("express");
const router = express.Router();
const { getAllDrugs, addDrug } = require("../controllers/drugController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getAllDrugs);
router.post("/add", protect, addDrug); 

module.exports = router;