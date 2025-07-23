// src/routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const { addComment } = require('../controllers/commentController');

// Rute untuk menambahkan komentar pada status
router.post('/:statusId', addComment);

module.exports = router;
