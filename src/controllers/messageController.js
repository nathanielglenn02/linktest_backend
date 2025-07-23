// src/controllers/messageController.js
const prisma = require('../models/prismaClient');

// Mengirim pesan antar pengguna
const sendMessage = async (req, res) => {
    const { senderId, receiverId, messageText } = req.body;

    try {
        const message = await prisma.message.create({
            data: {
                senderId,
                receiverId,
                messageText,
            },
        });
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
};

module.exports = {
    sendMessage,
};
