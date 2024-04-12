export default function FriendCircle({ friend }) {
    // console.log(friend)
    return (
        <div className="flex flex-col items-center">
            <img src={friend.imageUrl} />
            <p className="text-[12px] font-[400] text-[#A8A8A8]">{friend.name}</p>
        </div>
    )
}