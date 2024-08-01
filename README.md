# Chat App using MERN Stack
This is a simple chat app for letting users have end-to-end encrypted conversations.

## Features
1. Login using Email and password
2. Sign Up
3. End-to_End Ecryopted Chat
4. Shows online users with a green circle
5. Search for user

### Screenshots
![chat-msg](https://github.com/user-attachments/assets/80da6d1a-e969-4944-a454-f88ed6cc2e5f)

![home](https://github.com/user-attachments/assets/f1b98fef-0ffc-4bd4-b701-89d3192e1564)


### Technologies
1. ReactJS
2. TailwindCSS
3. Daisy UI
4. NodeJS
5. Express
6. Web Socket (socket.io library)
7. JWT Authentication
8. Context API
9. Zustand (for global state management)

## Frontend setup
2. Move to client folder and Run below Commands to run client.
```
npm install
npm run dev
```

## Backend setup
1. Create .env file in the root directory of the app.
```
PORT=...
MONGODB_URL=... # replace with http://localhost:27017 for local mongodb connection
JWT_SECRET_KEY=...
NODE_ENV=...
```
2. Move to root directory and Run below commands to start server.
```
npm install
npm run server
```
3. Build the app.
```
npm run build
```
