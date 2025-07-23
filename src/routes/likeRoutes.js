// src/routes/likeRoutes.js
const express = require('express');
const router = express.Router();
const { addLike } = require('../controllers/likeController');

// Rute untuk menambahkan like pada status
router.post('/:statusId', addLike);

module.exports = router;
