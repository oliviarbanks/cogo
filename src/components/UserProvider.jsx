
import { createContext, useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import SearchNextBar from "./SearchNextBar";
import { Link, useLocation } from 'react-router-dom';

export const UserContext = createContext({})

export function UserProvider({ children }) {
    const location = useLocation();

    const [user, setUser] = useState({});
    const [bottomBar, setBottomBar] = useState("navbar")

    if (localStorage.getItem("user")) {
        setUser(localStorage.getItem("user"))
    }
    
    useEffect(() => {
        // console.log(location)
        if (location.pathname === "/search") {
            setBottomBar('searchNextBar')
        } else {
            setBottomBar('navbar')
        }
    }, [location])

    return (
        <UserContext.Provider value={
            {
                user: user,
                setUser: setUser,
                setBottomBar: setBottomBar,
            }
        }>
            {children}
            {
                bottomBar === "navbar" && <Navbar />
            }
            {/* {
                bottomBar === "searchNextBar" && <SearchNextBar />
            } */}
        </UserContext.Provider>
    )
}