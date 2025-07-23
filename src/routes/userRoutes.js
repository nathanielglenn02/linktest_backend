// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, getUser, getAllUser } = require('../controllers/userController');

// Rute untuk mengambil semua user
router.get('/', getAllUser);


// Rute untuk membuat user baru
router.post('/', createUser);

// Rute untuk mengambil user berdasarkan id
router.get('/:id', getUser);

module.exports = router;
