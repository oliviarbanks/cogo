import { useState } from "react"
import FriendCircle from "./FriendCircle"
import { redirect, useNavigate } from "react-router-dom"

export default function ChatModal({ setBottomBar, setChatModal }) {
    const navigate = useNavigate()
    const imageUrls = [
        { name: "Sarah", imageUrl: "/images/person1.png" },
        { name: "Johnny", imageUrl: "/images/person2.png" },
        { name: "Teresa", imageUrl: "/images/person3.png" },
        { name: "Davonte", imageUrl: "/images/person4.png" },
    ]
    const [message, setMessage] = useState("")
    // const [sent, setSent] = useState(false)

    const handleSend = async (e) => {
        try {
            e.preventDefault()
            setBottomBar('navbar')
            setChatModal(false)
        } catch (e) {
            throw new Error(e)
        } finally {
            console.log('hello')
            navigate('/')
        }
        // console.log('eureka!')


    }

    return (
        <div
            className="h-[100vh] absolute bottom-0 w-full z-[10] bg-shareModalBg flex flex-col items-center overflow-y-auto justify-end">
            <div className="justify-between bg-[#292929] w-full flex flex-col items-center rounded-[32px] rounded-b-none">
                <h2 className="text-[24px] font-[700] py-[16px]">Chat</h2>
                <div className="w-full flex flex-col items-center gap-[24px] flex-grow-[1] justify-between">
                    <div className="w-full px-[16px] flex items-start gap-[32px] overflow-x-auto">
                        {imageUrls.map((card, index) => {
                            return (
                                <FriendCircle friend={card} key={index} />
                            )
                        })}
                    </div>
                    <div className="min-h-[100px] w-full px-[16px] outline-none">
                        <textarea placeholder="Write a message..." value={message} onChange={(e) => setMessage(e.target.value)} className="outline-none bg-transparent text-miami-white w-full placeholder:text-miami-white text-[18px]" />
                    </div>
                    <div className="w-full flex items-center justify-between px-[16px]">
                        <div
                            onClick={() => setMessage(prev => prev + "🔥")}
                        >
                            🔥
                        </div>
                        <div
                            onClick={() => setMessage(prev => prev + "🥰")}
                        >
                            🥰
                        </div>
                        <div
                            onClick={() => setMessage(prev => prev + "❤️")}
                        >
                            ❤️
                        </div>
                        <div
                            onClick={() => setMessage(prev => prev + "🎉")}
                        >
                            🎉
                        </div>
                        <div
                            onClick={() => setMessage(prev => prev + "🙌")}
                        >
                            🙌
                        </div>
                        <div
                            onClick={() => setMessage(prev => prev + "👍")}
                        >
                            👍
                        </div>
                    </div>
                    <div
                        onClick={(e) => { handleSend(e) }}
                        className=" w-full px-[16px] pb-[24px] flex justify-center items-start">
                        <div className="bg-[#8CF0F7] w-[90%] rounded-[25px] flex items-center justify-center py-[8px]">
                            <p className="text-[24px] font-[500] text-dalePurp">Send</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}