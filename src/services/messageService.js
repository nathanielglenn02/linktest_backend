// src/services/messageService.js
const prisma = require('../models/prismaClient');

// Mengirim pesan antar pengguna
const sendMessage = async (senderId, receiverId, messageText) => {
    try {
        return await prisma.message.create({
            data: {
                senderId,
                receiverId,
                messageText,
            },
        });
    } catch (error) {
        throw new Error('Failed to send message');
    }
};

module.exports = {
    sendMessage,
};
