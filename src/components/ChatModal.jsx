import { useState } from "react"

export default function ChatModal() {
    const imageUrls = [
        { name: "Sarah", imageUrl: "/images/person1.png" },
        { name: "Johnny", imageUrl: "/images/person2.png" },
        { name: "Teresa", imageUrl: "/images/person3.png" },
        { name: "Davonte", imageUrl: "/images/person4.png" },
    ]
    const [message, setMessage] = useState("")

    // const handleClickOutside = () => {
    //     setShareModal(false)
    //     setBottomBar("tripBar")
    // }

    // const handleClickSend = () => {
    //     console.log('ehllo')
    //     setShareModal(false)
    //     setChatModal(true)
    // }
    return (
        <div
            // onClick={() => handleClickOutside()}
            className="h-[100vh] absolute bottom-0 w-full z-[10] bg-shareModalBg flex flex-col items-center overflow-y-auto justify-end">
            <div className="justify-between bg-[#292929] w-full flex flex-col items-center rounded-[32px] rounded-b-none">
                <h2 className="text-[24px] font-[700] py-[16px]">Share</h2>
                <div className="w-full flex flex-col items-center gap-[24px] flex-grow-[1] justify-between">
                    <div className="w-[87%] flex items-center justify-start rounded-[50px] bg-white gap-[8px]">
                        <div className="bg-[#8CF0F7] w-[42px] aspect-square rounded-full flex items-center justify-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M22.5 22L20.5 20M12 21C13.2476 21 14.4829 20.7543 15.6355 20.2769C16.7881 19.7994 17.8354 19.0997 18.7175 18.2175C19.5997 17.3354 20.2994 16.2881 20.7769 15.1355C21.2543 13.9829 21.5 12.7476 21.5 11.5C21.5 10.2524 21.2543 9.0171 20.7769 7.86451C20.2994 6.71191 19.5997 5.66464 18.7175 4.78249C17.8354 3.90033 16.7881 3.20056 15.6355 2.72314C14.4829 2.24572 13.2476 2 12 2C9.48044 2 7.06408 3.00089 5.28249 4.78249C3.50089 6.56408 2.5 8.98044 2.5 11.5C2.5 14.0196 3.50089 16.4359 5.28249 18.2175C7.06408 19.9991 9.48044 21 12 21Z" stroke="#1D0F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[16px] font-[500] text-[#515151]">
                            Search
                        </p>
                    </div>
                    <div className="w-full flex-grow-[1] px-[16px] flex flex-col items-start gap-[8px] overflow-y-auto">
                        {/* {imageUrls.map((card, index) => {
                            return (
                                <FriendInviteCard imageUrl={card} key={index} />
                            )
                        })} */}
                    </div>
                    <div className="min-h-[100px] w-full px-[16px] outline-none">
                        <textarea placeholder="Write a message..." value={message} onChange={(e) => setMessage(e.target.value)} className="outline-none bg-transparent text-miami-white w-full" />
                    </div>
                    <div className="w-full flex items-center justify-between px-[16px] py-[16px]">
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
                </div>
            </div>
        </div>
    )
}