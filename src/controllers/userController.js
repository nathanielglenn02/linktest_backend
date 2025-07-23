// Mengambil semua user
const getAllUser = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        return res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ error: 'Failed to fetch users' });
    }
};
// src/controllers/userController.js
const prisma = require('../models/prismaClient');  // Mengimpor prismaClient

// Membuat user baru
const createUser = async (req, res) => {
    const { name, email, profile_picture, skills } = req.body;

    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                profilePic,
                skills,
            },
        });

        return res.status(201).json(newUser);  // Kembalikan user yang baru dibuat
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Failed to create user' });
    }
};

// Mengambil user berdasarkan id
const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        return res.status(500).json({ error: 'Failed to fetch user' });
    }
};

module.exports = {
    createUser,
    getUser,
    getAllUser,
};
