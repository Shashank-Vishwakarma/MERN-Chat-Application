import express from 'express';
import { sendMessage } from '../controllers/messageController.js';
import { verifyJWTMiddleware } from '../middlewares/verifyJWTMiddleware.js';

const messageRoutes = express.Router();

messageRoutes.post('/send/:id', verifyJWTMiddleware, sendMessage);

export default messageRoutes;