// src/controllers/likeController.js
const prisma = require('../models/prismaClient');

// Menambahkan like pada status
const addLike = async (req, res) => {
    const { userId } = req.body;
    const { statusId } = req.params;

    try {
        const like = await prisma.likeStatus.create({
            data: {
                userId,
                statusId: parseInt(statusId),
            },
        });
        res.status(201).json(like);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add like' });
    }
};

module.exports = {
    addLike,
};
