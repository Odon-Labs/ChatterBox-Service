import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();

//const connectDB = require('./main/config/db');
//const authRoutes = require('./routes/authRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(express.json());
//app.use('/api/auth', authRoutes);

// var usp = io.of('/user-namespace');
// Socket.IO connection
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('sendMessage', (data) => {
        io.emit('receiveMessage', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Database connection
// connectDB();
// Start server
const PORT = process.env.PORT || 9095;

mongoose.connect('mongodb://localhost:27017/chatDatabase')
.then(()=>{
    app.listen(PORT,()=>console.log(`Listening on port ${PORT}`))
}).catch(err=>{
    console.log(err);
})



//server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
