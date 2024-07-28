export const getCurrentUser = (req, res) => {
    const currentUser = req.user;
    if(!currentUser) {
        return res.status(400).json({ error: 'User not found' });
    }

    res.status(200).json({ currentUser });
}
