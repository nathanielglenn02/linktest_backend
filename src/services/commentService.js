// src/services/commentService.js
const prisma = require('../models/prismaClient');

// Menambahkan komentar pada status
const addComment = async (statusId, userId, commentText) => {
    try {
        return await prisma.comment.create({
            data: {
                userId,
                statusId: parseInt(statusId),
                commentText,
            },
        });
    } catch (error) {
        throw new Error('Failed to add comment');
    }
};

module.exports = {
    addComment,
};
