import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setUser } = useAuthContext();

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
            setUser(null);

            // clear the user from local storage
            localStorage.removeItem("user");

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
