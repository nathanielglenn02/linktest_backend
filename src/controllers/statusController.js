const prisma = require('../models/prismaClient');

const createStatus = async (req, res) => {
    const { content } = req.body;
    const userId = req.user?.id;

    console.log('👉 req.user:', req.user);
    console.log('👉 userId:', userId);

    if (!userId) {
        return res.status(401).json({ error: 'User tidak terautentikasi' });
    }

    try {
        const status = await prisma.status.create({
            data: {
                content,
                userId,
            },
        });

        return res.status(201).json(status);
    } catch (error) {
        console.error('❌ Error while creating status:', error);
        return res.status(500).json({ error: 'Failed to create status' });
    }
};


const getAllStatuses = async (req, res) => {
    try {
        const statuses = await prisma.status.findMany({
            include: {
                user: true,
                likes: true,
                comments: true,
            },
            orderBy: { createdAt: 'desc' },
        });
        res.json(statuses);
    } catch (error) {
        console.error('Error while fetching statuses:', error);
        res.status(500).json({ error: 'Failed to fetch statuses' });
    }
};

module.exports = {
    createStatus,
    getAllStatuses,
};
