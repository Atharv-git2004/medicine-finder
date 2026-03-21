const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
      minlength: [3, "username must be atleast 3 charecters"],
      maxlength: [30, "username cannot exceed 30 charecters"],
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minlength: [8, "password must be atleast 8 charecters"],
    },
    role: {
      type: String,
      enum: ["user", "seller", "admin"],
      default: ["user"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("User", userSchema);
