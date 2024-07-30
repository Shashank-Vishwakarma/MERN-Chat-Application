import axios from "axios";
import { useEffect, useState } from "react";
import useStore from '../zustand/useStore.js';
import toast from "react-hot-toast";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedChat } = useStore();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/v1/messages/get/${selectedChat?._id}`,
                    {
                        withCredentials: true
                    }
                );

                setLoading(false);
                setMessages(response.data?.messages);
            }
            catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        // get the messages only when a chat is selected
        if(selectedChat?._id) getMessages();
    }, [selectedChat]);

    return { loading, messages };
}

export default useGetMessages;