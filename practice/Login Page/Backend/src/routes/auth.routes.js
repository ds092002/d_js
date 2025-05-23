const express = require('express');
const authRoutes = express.Router();
const {
    registerUser,
    loginUser
} = require('../controllers/authController');

authRoutes.post('/register', registerUser);
authRoutes.post('/login', loginUser);

module.exports = authRoutes;