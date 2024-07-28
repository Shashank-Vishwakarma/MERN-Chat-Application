import express from 'express';
import { signUpAuth, loginAuth, logoutAuth, getCurrentUser } from '../controllers/authController.js';
import { verifyJWTMiddleware } from '../middlewares/verifyJWTMiddleware.js';

const authRoutes = express.Router();

authRoutes.post('/signup', signUpAuth);
authRoutes.post('/login', loginAuth);
authRoutes.get('/logout', verifyJWTMiddleware, logoutAuth);
authRoutes.get('/user/profile', verifyJWTMiddleware, getCurrentUser);

export default authRoutes;