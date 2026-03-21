const user = require("../models/userModel");

const jwt = require("jsonwebtoken")

const bcrypt = require("bcryptjs")

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

exports.register = async (req, res) => {
  console.log("inside register function");
  try {
    const { username, email, password, role } = req.body;
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({
          success: false,
          message: "email is already registered please login",
        });
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const newUser = await user.create({
      username,
      email,
      password:hashedPassword,
      role: role || "user",
    });
    res.status(200).json({
      success: true,
      message: "registration successfully",
      data: {
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          role: newUser.role,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
    console.log("inside login controller");
    
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "please provide email and password" });
    }
    const userr = await user.findOne({ email });

    if (!userr) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password,userr.password)
    if(!isMatch){
        return res.status(401).json({message:"wrong password"})
    }

    const token= createToken(userr._id)
    res.status(200).json({
      success: true,
      message: "login successfully",
      token,
      data: {
        user: {
          id: userr._id,
          username: userr.username,
          email: userr.email,
          role: userr.role,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
