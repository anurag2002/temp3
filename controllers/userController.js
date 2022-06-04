// const asyncHandler = require("express-async-handler");
const User = require("../models/userInfo");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = (async(req, res) => {
    const { Name, Email_ID, Password } = req.body;

    if (!Name || !Email_ID || !Password) {
        res.status(400);
        throw new Error("Please add all fields");
    }

    // Check if user exists
    const emailExists = await User.findOne({ Email_ID });

    if (emailExists) {
        res.status(400);
        throw new Error("Email already exists");
    }


    // Create user
    const user = await User.create({
        Name,
        Email_ID,
        Password, // : hashedPassword
    });

    if (user) {
        // res.status(201).json
        ({
            _id: user.id,
            Name: user.Name,
            Email_ID: user.Email_ID,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = (async(req, res) => {
    const { Email_ID, Password } = req.body;

    // Check for user Email_ID
    const user = await User.findOne({ Email_ID });

    if (user) {
        // res.json
        ({
            _id: user.id,
            Name: user.Name,
            Email_ID: user.Email_ID,
        });
    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    }
});

module.exports = {
    registerUser,
    loginUser,
};