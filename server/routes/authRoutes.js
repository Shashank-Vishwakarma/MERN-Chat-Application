import express from 'express';
import { signUpAuth, loginAuth, logoutAuth } from '../controllers/authController.js';
import { verifyJWTMiddleware } from '../middlewares/verifyJWTMiddleware.js';

const authRoutes = express.Router();

authRoutes.post('/signup', signUpAuth);
authRoutes.post('/login', loginAuth);
authRoutes.get('/logout', verifyJWTMiddleware, logoutAuth);

export default authRoutes;