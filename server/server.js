import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

// importing db.js for making connection to database on project init
import db from './database/db.js';

const app = express();
dotenv.config();

app.use('/api/v1/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server started running on port ${PORT}`);
});