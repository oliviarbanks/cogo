
import { createContext } from "react";
import { useState } from "react";

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