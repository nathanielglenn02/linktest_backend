// src/routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/messageController');

// Rute untuk mengirim pesan antar pengguna
router.post('/', sendMessage);

module.exports = router;
