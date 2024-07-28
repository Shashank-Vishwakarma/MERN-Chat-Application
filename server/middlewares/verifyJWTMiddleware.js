import User from "../database/models/UserModel.js";
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

export const verifyJWTMiddleware = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Token not found' });
    };

    try {
        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if(!decodedPayload) {
            return res.status(401).json({ error: 'Unauthorized - Invalid Token' });
        }

        console.log(decodedPayload);

        const user = await User.findById(decodedPayload.payload.id);
        if(!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        req.user = user;
        next();
    } catch(err) {
        res.status(500).json({ error: `Error in verifying token: ${err}` })
    }
};
