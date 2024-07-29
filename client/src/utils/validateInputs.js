import toast from 'react-hot-toast';

const validateInputs = ({ fullName, username, password, confirmPassword, gender }) => {
    if(!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('All fields are required');
        return false;
    }
    
    if(password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }

    if(password.length < 6) {
        toast.error('Password must have at least 6 characters');
        return false;
    }

    if(gender === 'Select gender') {
        toast.error('Select a gender');
        return false;
    }

    return true;
}

export default validateInputs
