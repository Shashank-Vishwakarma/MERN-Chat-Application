import { useContext, useState } from "react";
import validateLoginInputs from "../utils/validateLoginInputs";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(AuthContext);

    const login = async ({ username, password }) => {
        // validate the inputs
        const areInputsValid = validateLoginInputs({ username, password });
        if (!areInputsValid) return;

        setLoading(true);

        try {
            const response = await axios.post(
                'http://localhost:3000/api/v1/auth/login',
                { username, password },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            setLoading(false);
            setUser(response.data?.user);
            toast.success('Login successful');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
}

export default useLogin;
