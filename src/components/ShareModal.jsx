import FriendInviteCard from "./FriendInviteCard"

export default function ShareModal() {
    const imageUrls = [
        "/images/person1.png",
        "/images/person2.png",
        "/images/person3.png",
        "/images/person4.png",
    ]
    return (
        <div className="h-[50vh] absolute bottom-0 w-full z-[10] bg-blue-400 flex flex-col items-center overflow-y-auto rounded-[24px] rounded-b-none">
            <h2 className="text-[24px] font-[700]">Share</h2>
            <div className="w-full  flex flex-col items-start">
                <form className="w-full py-[16px] px-[16px]">
                    <input type="text" placeholder="Search" className="w-full" />
                </form>
                <div className="w-full px-[16px] flex flex-col items-start gap-[8px]">
                    {imageUrls.map((card) => {
                        return (
                            <FriendInviteCard imageUrl={card}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}