import { useState } from "react"

export default function Pill({ category, handleMoodChange }) {
    const [active, setActive] = useState(false)
    const handlePillClick = (moodString) => {
        // console.log(moodString)
        handleMoodChange(moodString)
        setActive(true)
    }
    return (
        <button
            onClick={() => handlePillClick(category)}
            className={`px-[16px] py-[4px] border-solid  border-[1px] border-pillBorder rounded-full  font-[500] ${active ? "bg-miami-white" : "bg-pillBg"}`}>
            <p className={`${active ? "text-black" : "text-miami-white"}`}>
                {category}
            </p>
        </button>
    )
}