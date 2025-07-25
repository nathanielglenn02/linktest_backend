// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login, logout } = require('../controllers/authController');

// POST /auth/login
router.post('/login', login);
router.post('/logout', logout);
module.exports = router;
