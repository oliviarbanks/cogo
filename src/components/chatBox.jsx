import ChatMessageList from "./chatMessageList"

const ChatBox = ({tripTitle, tripId}) => {

    const chat = [
        {
            "username": "Alice",
            "text": "Hey everyone! How's your day going?",
            "createdAt": "2024-04-11T15:00:00Z"
        },
        {
            "username": "Bob",
            "text": "Hey Alice! My day's been pretty good so far, just busy with work. How about you?",
            "createdAt": "2024-04-11T15:05:00Z"
        },
        {
            "username": "Charlie",
            "text": "Hi guys! I'm doing okay, just finished a workout session. How about you, Alice?",
            "createdAt": "2024-04-11T15:10:00Z"
        }
    ]
    // React Query chat query
    return (<>
        <div className=" flex flex-col rounded-t-md h-[40vh] w-screen">
            <h2> {tripTitle} </h2>
            <ChatMessageList messages = {chat} ></ChatMessageList>
        </div>
    </>)
}
