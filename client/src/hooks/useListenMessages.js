import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext.jsx";
import useStore from "../zustand/useStore.js";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useStore();

    useEffect(()=>{
        socket?.on("new-message", (message)=>{
            setMessages([...messages, message]);
        })

        return ()=> socket?.off("new-message");
    }, [socket, messages]);
}

export default useListenMessages;