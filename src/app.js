// src/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const prisma = require('./models/prismaClient');  // Mengimpor prismaClient dari models (sesuaikan path jika perlu)
const statusRoutes = require('./routes/statusRoutes');  // Mengimpor statusRoutes
const likeRoutes = require('./routes/likeRoutes');
const commentRoutes = require('./routes/commentRoutes');  // Mengimpor commentRoutes
const messageRoutes = require('./routes/messageRoutes');  // Mengimpor messageRoutes
const connectionRoutes = require('./routes/connectionRoutes');  // Mengimpor connectionRoutes
const userRoutes = require('./routes/userRoutes');  // Mengimpor userRoutes jika ada
const errorHandler = require('./utils/errorHandler');  // Mengimpor errorHandler
const authUtils = require('./utils/auth');  // Mengimpor authUtils jika diperlukan

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Untuk parsing JSON

// Rute API
app.use('/status', statusRoutes);  // Menghubungkan status routes ke '/status'
app.use('/like', likeRoutes);   // Menghubungkan like routes ke '/like'
app.use('/comment', commentRoutes);  // Menghubungkan comment routes ke '/comment'
app.use('/message', messageRoutes);  // Menghubungkan message routes ke '/message'
app.use('/connection', connectionRoutes);  // Menghubungkan connection routes ke '/connection'
app.use('/user', userRoutes);  // Menghubungkan user routes ke '/user'

// Halaman utama (opsional)
app.get('/', (req, res) => {
    res.send('Welcome to LinkTest API!');
});

// Error handling middleware (jika diperlukan)
app.use(errorHandler);

// Menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
