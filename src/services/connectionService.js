// src/services/connectionService.js
const prisma = require('../models/prismaClient');

// Membuat koneksi antar pengguna
const createConnection = async (userId1, userId2) => {
    try {
        return await prisma.connection.create({
            data: {
                userId1: parseInt(userId1),
                userId2: parseInt(userId2),
            },
        });
    } catch (error) {
        throw new Error('Failed to create connection');
    }
};

module.exports = {
    createConnection,
};
