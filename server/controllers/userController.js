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
        const currentUserId = req.user._id

        const users = await User.find({ _id: { $ne: currentUserId } }).select(["fullName", "username", "gender", "profilePicture"]);
        res.status(200).json({ users });
    } catch(err) {
        res.status(500).json({ error: `Error in getting all users: ${err}` });
    }
}
