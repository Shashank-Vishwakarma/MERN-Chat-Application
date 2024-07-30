import { create } from 'zustand';

const useStore = create((set) => ({
    selectedChat: null,
    setSelectedChat: (selectedChat) => set({ selectedChat }),

    messages: [],
    setMessages: (messages) => set({ messages }),
}))

export default useStore;