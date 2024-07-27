import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL, {
    dbName: 'Mern_Chat_App'
});

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Connected to database');
});

db.on('disconnected', ()=>{
    console.log('database disconnected');
});

db.on('error', (err)=>{
    console.log('Error connecting to database: ', err);
});

export default db;