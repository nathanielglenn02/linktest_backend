// src/services/likeService.js
const prisma = require('../models/prismaClient');

// Menambahkan like pada status
const addLike = async (statusId, userId) => {
    try {
        return await prisma.likeStatus.create({
            data: {
                userId,
                statusId: parseInt(statusId),
            },
        });
    } catch (error) {
        throw new Error('Failed to add like');
    }
};

module.exports = {
    addLike,
};
