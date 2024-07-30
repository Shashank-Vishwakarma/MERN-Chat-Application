import { createServer } from 'http';
import express from 'express';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
    }
});

io.on('connection', (socket)=>{
    console.log('a user connected: ', socket.id);

    socket.on('disconnect', ()=>{
        console.log('user disconnected: ', socket.id);
    })
})

export { app, io, server };