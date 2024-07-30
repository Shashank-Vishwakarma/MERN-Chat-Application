import { useEffect, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";

const useGetChats = () => {
    const [loading, setLoading] = useState(false);
    const [chats, setChats] = useState([]);

    useEffect(()=> {
        const getChats = async ()=>{
            setLoading(true);
            try {
                const response = await axios.get(
                    'http://localhost:3000/api/v1/users',
                    {
                        withCredentials: true
                    }
                );
    
                setChats(response.data?.users);
                setLoading(false);
            } catch(error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        getChats();
    }, []);

    return { loading, chats };
}

export default useGetChats;