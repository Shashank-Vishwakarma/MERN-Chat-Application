import toast from "react-hot-toast"

const validateLoginInputs = ({ username, password }) => {
    if(!username || !password) {
        toast.error('Fill all the fields');
        return false;
    }

    if(password.length < 6) {
        toast.error('Password must have at least 6 characters');
        return false;
    }

    return true;
}

export default validateLoginInputs;