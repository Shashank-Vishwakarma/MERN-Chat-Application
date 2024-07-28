import User from "../database/models/UserModel.js";

export const getCurrentUser = (req, res) => {
    const currentUser = req.user;
    if(!currentUser) {
        return res.status(400).json({ error: 'User not found' });
    }

    res.status(200).json({ currentUser });
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ users });
    } catch(err) {
        res.status(500).json({ error: `Error in getting all users: ${err}` });
    }
}
