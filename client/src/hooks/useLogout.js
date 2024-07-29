import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useLogout = () => {
    const [loading, setLoading] = useState(false);

    const logout = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                'http://localhost:3000/api/v1/auth/logout',
                {
                    withCredentials: true
                }
            );

            setLoading(false);
            toast.success('Successfully logged out');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
}

export default useLogout;
