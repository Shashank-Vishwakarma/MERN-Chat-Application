import express from 'express';
import { getCurrentUser, getAllUsers } from '../controllers/userController.js';
import { verifyJWTMiddleware } from '../middlewares/verifyJWTMiddleware.js';

const userRoutes = express.Router();

userRoutes.get('/current/profile', verifyJWTMiddleware, getCurrentUser);
userRoutes.get('/', verifyJWTMiddleware, getAllUsers);

export default userRoutes;