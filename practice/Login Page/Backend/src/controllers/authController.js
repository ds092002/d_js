const User = require("../model/UserModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    console.log("Body ==>", req.body);
    const existingUser = await User.findOne({
      userName: req.body.userName,
      email: req.body.email,
    });

    if (existingUser) {
      return res.status(400).json({
        status: 400,
        message: "User is already register. Please login now",
        data: {},
      });
    }

    const hashPassword = await bcryptjs.hash(req.body.password, 7);

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
    });

    res.status(201).json({
      status: 201,
      message: "New user is added successfully.",
      data: newUser,
    });
  } catch (error) {
    console.error(error);  
    res.status(500).json({ message: `Internal Server Error...` });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, isDelete: false });

    if (!user) {
      return res.status(400).json({
        status: 400,
        message: "Email not found",
        data: {},
      });
    }

    isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        status: 401,
        message: "Invalid password",
        data: {},
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    console.log("Token ==>", token);

    return res.status(200).json({
      status: 200,
      message: "Login succesfull",
      data: token,
    });
  } catch (error) {}
};
