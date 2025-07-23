// src/controllers/statusController.js
const prisma = require('../models/prismaClient');  // Mengimpor prismaClient

const createStatus = async (req, res) => {
    const { content, userId } = req.body;

    try {
        // Cek apakah userId valid, jika tidak, buat user baru
        let user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            // Jika user tidak ada, buat user baru
            user = await prisma.user.create({
                data: {
                    name: `User${userId}`,  // Atur nama user default
                    email: `${userId}@example.com`,  // Email sementara
                    profile_picture: 'default.jpg',  // Gambar profil default
                    skills: 'Unknown',  // Keterampilan default
                },
            });
        }

        // Membuat status baru
        const status = await prisma.status.create({
            data: {
                content,
                userId,
            },
        });

        return res.status(201).json(status); // Kembalikan status yang baru dibuat
    } catch (error) {
        console.error('Error while creating status:', error);
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
