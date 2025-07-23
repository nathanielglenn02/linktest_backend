// src/utils/auth.js
const jwt = require('jsonwebtoken');

// Fungsi untuk membuat token JWT
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Fungsi untuk memverifikasi token JWT
const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);  // Verifikasi token
    } catch (error) {
        throw new Error('Invalid or expired token');  // Jika token invalid atau kedaluwarsa
    }
};

// Middleware untuk memverifikasi token
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];  // Ambil token dari header Authorization

    if (!token) {
        return res.status(403).json({ error: 'Token is required' });
    }

    try {
        const decoded = verifyToken(token);  // Verifikasi token
        req.userId = decoded.userId;         // Menyimpan userId ke request untuk digunakan di rute berikutnya
        next();  // Lanjutkan ke rute berikutnya
    } catch (error) {
        return res.status(403).json({ error: 'Invalid or expired token' });  // Jika token invalid
    }
};

module.exports = {
    generateToken,
    verifyToken,
    authMiddleware,
};
