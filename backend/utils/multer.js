const multer = require('multer');
const path = require('path');

// ഫയൽ എവിടെ, എന്ത് പേരിൽ സേവ് ചെയ്യണം എന്ന് തീരുമാനിക്കുന്നു
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // ഇമേജുകൾ 'uploads' ഫോൾഡറിൽ സേവ് ആകും
  },
  filename: (req, file, cb) => {
    // ഒരേ പേര് വരാതിരിക്കാൻ സമയം കൂടി ചേർക്കുന്നു (e.g., 171234567.jpg)
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

// ഫയൽ ടൈപ്പ് ഫിൽട്ടർ ചെയ്യാം (Images മാത്രം മതി എങ്കിൽ)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Images only are allowed'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter 
});

module.exports = upload;