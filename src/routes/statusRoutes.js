// src/routes/statusRoutes.js
const express = require('express');
const router = express.Router();
const { getAllStatuses, createStatus } = require('../controllers/statusController');
const { authMiddleware } = require('../utils/auth');  // Mengimpor authMiddleware

// Rute untuk mendapatkan semua status
router.get('/', getAllStatuses);

// Rute untuk membuat status baru
router.post('/', authMiddleware, createStatus);

module.exports = router;
