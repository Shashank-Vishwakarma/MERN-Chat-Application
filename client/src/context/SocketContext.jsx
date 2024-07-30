import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';
import { io } from 'socket.io-client';

const SocketContext = createContext({});

export const useSocketContext = () => {
    return useContext(SocketContext);
}

const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        if (user) {
            const socket = io('http://localhost:3000', {
                query: {
                    userId: user?._id
                }
            });
            setSocket(socket);

            socket.on("getOnlineUsers", (userIds) => {
                setOnlineUsers(userIds);
            })

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
            }
            setSocket(null);
        }
    }, [user]);

    return <SocketContext.Provider value={{ socket, onlineUsers }} >{children}</SocketContext.Provider>
}

export default SocketContextProvider;