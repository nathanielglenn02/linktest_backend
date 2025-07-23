// src/services/statusService.js
const prisma = require('../models/prismaClient');

// Mendapatkan semua status
const getAllStatuses = async () => {
    try {
        return await prisma.status.findMany({
            include: {
                user: true,
                likes: true,
                comments: true,
            },
        });
    } catch (error) {
        throw new Error('Failed to fetch statuses');
    }
};

// Membuat status baru
const createStatus = async (content, userId) => {
    try {
        return await prisma.status.create({
            data: {
                content,
                userId,
            },
        });
    } catch (error) {
        throw new Error('Failed to create status');
    }
};

module.exports = {
    getAllStatuses,
    createStatus,
};
