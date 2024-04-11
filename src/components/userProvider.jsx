
import { createContext } from "react";
import { useState } from "react";
import { useQuery } from '@tanstack/react-query' 

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const UserContext = createContext({})


export function UserProvider({ children }) {
    const [user, setUser] = useState({});
    
    return (
        <UserContext.Provider value={
            {
                user: user,
                setUser: setUser,
            }
        }>
            {children}
        </UserContext.Provider>
    )
}