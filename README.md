# Chat App using MERN Stack
This is a simple chat app for letting users have end-to-end encrypted conversations.

## Features
1. Login using Email and password
2. Sign Up
3. Logout
4. End-to-End Ecryopted Chat
5. Shows online users with a green circle
6. Search for user

### Screenshots

### Login Page

![login](https://github.com/user-attachments/assets/866e9e44-0875-4025-9d50-e51757938b02)

### Sign Up Page

![signup](https://github.com/user-attachments/assets/da1406ba-3155-49ad-809e-0ce5ef133715)

### Home Page

![home](https://github.com/user-attachments/assets/f1b98fef-0ffc-4bd4-b701-89d3192e1564)

### Search For user

![search](https://github.com/user-attachments/assets/299816d7-b0d6-404d-b9e6-a4097f934ee0)

### End-to-End encrypted chat between users

![chat-msg](https://github.com/user-attachments/assets/80da6d1a-e969-4944-a454-f88ed6cc2e5f)

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
