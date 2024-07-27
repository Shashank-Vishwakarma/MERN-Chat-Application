import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

import User from "../database/models/UserModel.js";

dotenv.config();

export const generateToken = (payload) => {
    return jwt.sign({ payload }, process.env.JWT_SECRET_KEY, { expiresIn: '15d' });
};

export const verifyJWTMiddleware = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ error: 'Token not found' });
    };

    try {
        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = await User.findById(decodedPayload.id);
        next();
    } catch(err) {
        res.status(500).json({ error: 'Error in verifying token' })
    }
};
