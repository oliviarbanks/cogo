import { useState } from "react"

export default function Pill({ category }) {
    const [active, setActive] = useState(false)
    return (
        <button
            onClick={() => setActive(prev => !prev)}
            className={`px-[16px] py-[4px] border-solid bg-pillBg border-[1px] border-pillBorder rounded-full  font-[500] ${active && "bg-miami-white"}`}>
            <p className={`${active ? "text-black" : "text-miami-white"}`}>
                {category}
            </p>
        </button>
    )
}