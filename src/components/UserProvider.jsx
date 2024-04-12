
import { createContext, useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import SearchNextBar from "./SearchNextBar";
import { Link, useLocation } from 'react-router-dom';
import ShareModal from "./ShareModal";
import TripBar from "./TripBar";
import ChatModal from "./ChatModal";

export const UserContext = createContext({})

export function UserProvider({ children }) {
    const location = useLocation();

    const [user, setUser] = useState({});
    const [bottomBar, setBottomBar] = useState("navbar")
    const [shareModal, setShareModal] = useState(false)
    const [chatModal, setChatModal] = useState(false)

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
                setShareModal: setShareModal,
                setChatModal: setChatModal
            }
        }>
            {children}
            {bottomBar === "navbar" && <Navbar />}
            {bottomBar === "tripBar" && !chatModal && <TripBar setShareModal={setShareModal} setBottomBar={setBottomBar} />}
            {shareModal && <ShareModal setShareModal={setShareModal} setBottomBar={setBottomBar} setChatModal={setChatModal} />}
            {chatModal && <ChatModal setChatModal={setChatModal} setBottomBar={setBottomBar} />}
        </UserContext.Provider>
    )
}