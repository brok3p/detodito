import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const UserProvider = ({children}) => {
    const userLocal = JSON.parse(localStorage.getItem('user')) ?? {};
    const [user, setUser] = useState(userLocal);
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    
    const guardarSesion = (user) => {
        setUser(user);
    }

    const logout = () => {
        console.log('logged out');
        setUser({});
    }

    const values = {
        user,
        guardarSesion,
        logout
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}