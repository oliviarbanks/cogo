import { useContext } from "react";
import { UserContext } from "../components/UserProvider";
export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useBookmarks must be used within a BookmarkProvider');
    }

    return context
}