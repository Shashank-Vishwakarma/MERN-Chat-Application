import Conversation from "../database/models/ConversationModel.js";
import Message from "../database/models/MessageModel.js";

export const sendMessage = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.user._id;

        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'message cannot be empty' });
        }

        const newMessage = new Message({ senderId, receiverId, message });

        // find the conversation between the users if available
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            // create a conversation because they are messaging for the first time
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        conversation.messages.push(newMessage._id);

        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({ message: "message sent successfully", newMessage: newMessage });
    } catch (err) {
        res.status(500).json({ error: `Error sending the message: ${err}` });
    }
}

export const getMessages = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate('messages');

        return res.status(200).json({ messages: conversation?.messages });
    } catch (err) {
        res.status(500).json({ error: `Error in getting the messages: ${err}` });
    }
}
