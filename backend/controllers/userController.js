import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// ================== AUTH USER ================== //
// desc   =>   Auth user/set token
// route   =>  POST /api/users/auth
// access   =>   Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// ================== REGISTER USER ================== //
// desc   =>   Register a new user
// route   =>  POST /api/users
// access   =>   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    confirmPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    throw new Error("Invalid user data");
  }
});

// ================== LOGOUT USER ================== //
// desc   =>   Logout user
// route   =>  POST /api/users/logout
// access   =>   Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout User" });
});

// ================== GET USER PROFILE ================== //
// desc   =>   Get user profile
// route   =>  GET /api/users/profile
// access   =>   Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

// ================== UPDATE USER PROFILE ================== //
// desc   =>   Update user profile
// route   =>  PUT /api/users/profile
// access   =>   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
};
