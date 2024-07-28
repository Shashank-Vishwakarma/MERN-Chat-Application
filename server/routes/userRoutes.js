import express from 'express';
import { getCurrentUser } from '../controllers/userController.js';
import { verifyJWTMiddleware } from '../middlewares/verifyJWTMiddleware.js';

const userRoutes = express.Router();

userRoutes.get('/current/profile', verifyJWTMiddleware, getCurrentUser);

export default userRoutes;