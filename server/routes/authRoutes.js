import express from 'express';
import { signUpAuth, loginAuth, logoutAuth } from '../controllers/authController.js';

const authRoutes = express.Router();

authRoutes.post('/signup', signUpAuth);
authRoutes.post('/login', loginAuth);
authRoutes.post('/logout', logoutAuth);

export default authRoutes;