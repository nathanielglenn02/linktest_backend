// src/controllers/connectionController.js
const prisma = require('../models/prismaClient');

// Membuat koneksi antar pengguna
const createConnection = async (req, res) => {
    const { userId1, userId2 } = req.body;

    try {
        const connection = await prisma.connection.create({
            data: {
                userId1,
                userId2,
            },
        });
        res.status(201).json(connection);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create connection' });
    }
};

module.exports = {
    createConnection,
};
