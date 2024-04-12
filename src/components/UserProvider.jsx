
import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({})

export function UserProvider({ children }) {
    const [user, setUser] = useState({});

    if (localStorage.getItem("user")){
        setUser(localStorage.getItem("user"))
    }

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