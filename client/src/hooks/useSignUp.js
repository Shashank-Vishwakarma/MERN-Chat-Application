import { useContext, useState } from "react";
import validateInputs from "../utils/validateInputs";
import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(AuthContext);

    const signUp = async ({ fullName, username, password, confirmPassword, gender }) => {
        // validate the inputs
        const areInputsValid = validateInputs({ fullName, username, password, confirmPassword, gender });
        if (!areInputsValid) return;

        setLoading(true);

        try {
            const response = await axios.post(
                'http://localhost:3000/api/v1/auth/signup',
                { fullName, username, password, confirmPassword, gender },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            setLoading(false);
            setUser(response.data?.user);

            // save the user to local storage so that on refresh, we are not redirected to login page
            localStorage.setItem('user', JSON.stringify(response.data?.user));

            toast.success('Sign Up successful');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signUp };
}

export default useSignUp;
