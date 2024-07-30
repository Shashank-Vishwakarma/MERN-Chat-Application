import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';

import { app, server } from './socket/socket.js';

// importing db.js for making connection to database on project init
import db from './database/db.js';

dotenv.config();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
}));

// to parse req.body as json
app.use(express.json());

// to parse req.cookies as object
app.use(cookieParser());

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/messages', messageRoutes);
app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=>{
    console.log(`Server started running on port ${PORT}`);
});