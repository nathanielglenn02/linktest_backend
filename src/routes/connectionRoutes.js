// src/routes/connectionRoutes.js
const express = require('express');
const router = express.Router();
const { createConnection } = require('../controllers/connectionController');

// Rute untuk membuat koneksi antar pengguna
router.post('/', createConnection);

module.exports = router;
