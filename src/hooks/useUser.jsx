import { UserContext } from "../components/userProvider";
import { useContext } from "react";

export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useBookmarks must be used within a BookmarkProvider');
    }

    return context
}