import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthContextProvider = ({ children })=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    return <AuthContext.Provider value={{ user, setUser }} >{children}</AuthContext.Provider>
}

export default AuthContextProvider;
