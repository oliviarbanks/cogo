
import { createContext, useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import SearchNextBar from "./SearchNextBar";
import { Link, useLocation } from 'react-router-dom';
import ShareModal from "./ShareModal";
import TripBar from "./TripBar";

export const UserContext = createContext({})

export function UserProvider({ children }) {
    const location = useLocation();

    const [user, setUser] = useState({});
    const [bottomBar, setBottomBar] = useState("navbar")
    const [shareModal, setShareModal] = useState(false)

    if (localStorage.getItem("user")) {
        setUser(localStorage.getItem("user"))
    }

    useEffect(() => {
        // console.log(location)
        if (location.pathname === "/search") {
            setBottomBar('searchNextBar')
        } else if (location.pathname === "/experience") {
            setBottomBar('tripBar')
        }
        else {
            setBottomBar('navbar')
        }
    }, [location])

    return (
        <UserContext.Provider value={
            {
                user: user,
                setUser: setUser,
                setBottomBar: setBottomBar,
                setShareModal, setShareModal
            }
        }>
            {children}
            {bottomBar === "navbar" && <Navbar />}
            {bottomBar === "tripBar" && <TripBar />}
            {shareModal && <ShareModal />}
        </UserContext.Provider>
    )
}