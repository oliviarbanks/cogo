const ChatBubble = ({message, msgStyle}) => {
    return (<>
        <div className={`rounded-md ${msgStyle}`}> {message} </div>
    </>)
}

export default ChatBubble;