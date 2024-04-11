import ChatBubble from "./ChatBubble"
import useUser from '../hooks/useUser'

const ChatMessageList = ({messages}) => {
    const user = useUser();
    const userStyle = " ml-auto";
    const otherStyle = "mr-auto";
    return (<>
        {messages && messages.map(message => {
            if (message.username ==  "Charlie"){
                <ChatBubble message = {message.text} msgStyle = {userStyle}></ChatBubble>
            }else{
                <ChatBubble message = { message.text} msgStyle= {otherStyle}></ChatBubble>
            }
        })}
    </>)
}

export default ChatMessageList