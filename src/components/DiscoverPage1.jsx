import { useState } from "react"
import Pill from "./Pill"

export default function DiscoverPage1({ categories }) {
    const [mood, setMood] = useState([])
    const handleMoodChange = (moodString) => {
        // console.log(mood)
        setMood(prev => [...prev, moodString])
    }
    return (
        <div className="w-full flex flex-col pb-[96px]">
            <div className="flex flex-col items-start ">
                <h2 className="text-[40px] font-[700] w-[70%] self-center text-miami-white">What you in the mood for?</h2>
            </div>
            <p className="pb-[24px] text-[18px] font-[400] tracking-[0.36px] w-[70%] self-center text-miami-white">Know what you want? Type it in! Feeling unsure? Click the pills.</p>
            <div className="flex items-center justify-start rounded-[50px] bg-white w-[75%] gap-[16px] self-center mb-[24px]">
                <div className="bg-black w-[42px] aspect-square rounded-full flex items-center justify-center ">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Iconsax/Linear/searchnormal1">
                            <path id="Vector" d="M22.5 22L20.5 20M12 21C13.2476 21 14.4829 20.7543 15.6355 20.2769C16.7881 19.7994 17.8354 19.0997 18.7175 18.2175C19.5997 17.3354 20.2994 16.2881 20.7769 15.1355C21.2543 13.9829 21.5 12.7476 21.5 11.5C21.5 10.2524 21.2543 9.0171 20.7769 7.86451C20.2994 6.71191 19.5997 5.66464 18.7175 4.78249C17.8354 3.90033 16.7881 3.20056 15.6355 2.72314C14.4829 2.24572 13.2476 2 12 2C9.48044 2 7.06408 3.00089 5.28249 4.78249C3.50089 6.56408 2.5 8.98044 2.5 11.5C2.5 14.0196 3.50089 16.4359 5.28249 18.2175C7.06408 19.9991 9.48044 21 12 21Z" stroke="#F6F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </div>
                <p className="text-[16px] font-[500] text-[#515151]">
                    Search
                </p>
            </div>
            <div className="w-[70%] self-center flex flex-wrap items-start gap-x-[12px] gap-y-[16px]">
                {categories.map((category, index) => {
                    return (
                        <Pill category={category} key={index + 22} handleMoodChange={handleMood} />
                    )
                })}
            </div>
        </div>
    )
}