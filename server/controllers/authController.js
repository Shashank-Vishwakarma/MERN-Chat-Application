import User from "../database/models/UserModel.js";
import { generateToken } from "../utils/jwt.js";

export const signUpAuth = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if(password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        const user = await User.findOne({ username });
        if(user) {
            return res.status(400).json({ error: 'User with this username already exists' });
        }

        let profilePicture = "";
        if(gender === 'male') {
            profilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        } else {
            profilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        }

        const newUser = new User({ fullName, username, password, gender, profilePicture });
        await newUser.save();

        // Now, create JWT
        const JWTToken = generateToken({ id: newUser._id });
        const cookieOptions = {
            maxAge: 15*24*60*60*1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== 'development'
        };
        res.cookie('token', JWTToken, cookieOptions);
        res.status(201).json({ message: 'User SignUp successful!', user: newUser, token: JWTToken });
    } catch(err) {
        res.status(500).json({ error: `Error occurred while creating the user : ${err}` });
    }
};

export const loginAuth = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if(!user) {
            return res.status(401).json({ error: 'User does not exist' });
        }

        // verify the password
        const isPasswordMatch = await user.comparePassword(password);
        if(!isPasswordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // generate Token
        const JWTtoken = generateToken({ id: user._id });
        const cookieOptions = {
            maxAge: 15*24*60*60*1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== 'development'
        };
        res.cookie('token', JWTtoken, cookieOptions);
        res.status(200).json({ error: 'Login successful!', token: JWTtoken });
    } catch(err) {
        res.status(500).json({ error: 'Error logging the user in' });
    }
};

export const logoutAuth = (req, res) => {
    try {
        res.cookie('token', '', { maxAge: 0 });
        res.status(500).json({ message: 'User logged out successfully!' });
    } catch(err) {
        res.status(500).json({ error: 'Error logging the user out' });
    }
};
