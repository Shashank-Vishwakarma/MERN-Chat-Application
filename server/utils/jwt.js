import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = (payload) => {
    return jwt.sign({ payload }, process.env.JWT_SECRET_KEY, { expiresIn: '15d' });
};
