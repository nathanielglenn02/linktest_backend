// src/controllers/commentController.js
const prisma = require('../models/prismaClient');

// Menambahkan komentar pada status
const addComment = async (req, res) => {
    const { userId, commentText } = req.body;
    const { statusId } = req.params;

    try {
        const comment = await prisma.comment.create({
            data: {
                userId,
                statusId: parseInt(statusId),
                commentText,
            },
        });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add comment' });
    }
};

module.exports = {
    addComment,
};
