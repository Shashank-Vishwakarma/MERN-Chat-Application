import axios from "axios";
import toast from "react-hot-toast"
import useStore from "../zustand/useStore.js";
import { useState } from "react";

const useSendMessage = ()=>{
    const [loading, setLoading] = useState(false);
    const { selectedChat } = useStore();

    const sendMessage = async (senderId, receiverId, message) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `http://localhost:3000/api/v1/messages/send/${selectedChat?._id}`,
                { senderId, receiverId, message },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            setLoading(false);
            toast.success(`message sent ${message}`);
        } catch(error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, sendMessage };
}

export default useSendMessage;