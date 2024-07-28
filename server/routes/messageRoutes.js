import express from 'express';
import { getMessages, sendMessage } from '../controllers/messageController.js';
import { verifyJWTMiddleware } from '../middlewares/verifyJWTMiddleware.js';

const messageRoutes = express.Router();

messageRoutes.post('/send/:id', verifyJWTMiddleware, sendMessage);
messageRoutes.get('/get/:id', verifyJWTMiddleware, getMessages);

export default messageRoutes;