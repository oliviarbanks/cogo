import { useState } from "react";

export default function SearchDetailsForm({ handleNextStep }) {
    const [showWhere, setShowWhere] = useState(false)
    const [showWhen, setShowWhen] = useState(false)
    const [showHow, setShowHow] = useState(false)
    const [showBudget, setShowBudget] = useState(false)
    const [showExtra, setShowExtra] = useState(false)
    const [location, setLocation] = useState("")
    const [budget, setBudget] = useState(0)
    const [radius, setRadius] = useState(1)

    const handleChangeLocation = (e) => {
        e.preventDefault()
        setLocation(e.target.value)
    }
    return (
        <form className="w-full px-[16px]  flex flex-col items-start gap-[14px] pb-[96px]">
            <div
                onClick={() => setShowWhere(true)}
                className=" flex flex-col items-start w-full shadow-searchField bg-white rounded-[24px] pb-[28px] px-[24px] pt-[12px] gap-[12px]">
                <label className="text-[24px] font-[700] text-[#515151]">Where to?</label>
                <div className="w-full flex items-center px-[16px] gap-[12px] border-solid border-[1px] border-gray-400 rounded-[24px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon / Search">
                            <path id="Vector" d="M10.5 17C11.8832 17.0024 13.2308 16.5616 14.345 15.742H14.344C14.3733 15.782 14.406 15.8203 14.442 15.857L18.292 19.707C18.4795 19.8946 18.7339 20.0001 18.9991 20.0002C19.2644 20.0003 19.5189 19.895 19.7065 19.7075C19.8941 19.52 19.9996 19.2656 19.9997 19.0004C19.9998 18.7351 19.8945 18.4806 19.707 18.293L15.857 14.443C15.8213 14.4068 15.7828 14.3734 15.742 14.343C16.5611 13.2293 17.002 11.8825 17 10.5C17 8.77609 16.3152 7.12279 15.0962 5.90381C13.8772 4.68482 12.2239 4 10.5 4C8.77609 4 7.12279 4.68482 5.90381 5.90381C4.68482 7.12279 4 8.77609 4 10.5C4 12.2239 4.68482 13.8772 5.90381 15.0962C7.12279 16.3152 8.77609 17 10.5 17ZM10.5 8.482C12.164 6.809 16.325 9.736 10.5 13.5C4.675 9.736 8.836 6.81 10.5 8.482Z" fill="#A0A0A0" />
                        </g>
                    </svg>
                    <input className="w-full placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#A0A0A0] py-[16px] outline-none text-black" type="text" placeholder="Search destinations" onChange={(e) => handleChangeLocation(e)} />
                </div>
                {
                    showWhere &&
                    <div className="w-full flex items-center justify-between gap-[8px] text-[#515151]">
                        <p>1 mi.</p>
                        <input type="range" className="flex-grow-[1]" min="1" max="25" step="1" onChange={(e) => {
                            setRadius(e.target.value)
                        }}
                        />
                        <p>25 mi.</p>
                    </div>
                }
            </div>
            <div className=" flex w-full shadow-searchField bg-white rounded-[24px] px-[24px] py-[24px] gap-[12px] items-center justify-between">
                <label className="text-[16px] font-[500] text-[#515151]">When?</label>
                {/* <DatePicker /> */}
                <p className="font-[600] text-[16px] text-[#515151]">Today</p>
            </div>
            <div
                onClick={() => setShowHow(true)}
                className=" flex flex-col w-full shadow-searchField bg-white rounded-[24px] px-[24px] py-[24px] gap-[12px] items-start justify-between text-[#515151]">
                <div className="flex w-full items-center justify-between">
                    <p className="text-[16px] font-[500] text-[#515151]">How?</p>
                    <p className="font-[600] text-[16px] text-[#515151]">Add Transportation</p>
                </div>
                {
                    showHow &&
                    <div className="flex flex-col items-start w-full px-[24px] gap-[16px]">
                        <div className="flex items-center w-full gap-[10px] ">
                            <input type="checkbox" className="accent-primary-pink" />
                            <p>Car</p>
                            <p className="ml-auto">🚗</p>
                        </div>
                        <div className="flex items-center w-full gap-[10px]">
                            <input type="checkbox" className="accent-primary-pink" />
                            <p>Public Transit</p>
                            <p className="ml-auto">🚌</p>
                        </div>
                        <div className="flex items-center w-full gap-[10px]">
                            <input type="checkbox" className="accent-primary-pink" />
                            <p>Ride Share</p>
                            <p className="ml-auto">🚕</p>
                        </div>
                        <div className="flex items-center w-full gap-[10px]">
                            <input type="checkbox" className="accent-primary-pink" />
                            <p>Bicycle</p>
                            <p className="ml-auto">🚴</p>
                        </div>
                        <div className="flex items-center w-full gap-[10px]">
                            <input type="checkbox" className="accent-primary-pink" />
                            <p>Walking</p>
                            <p className="ml-auto">🏃‍♂️</p>
                        </div>
                    </div>
                }
            </div>
            <div
                onClick={() => setShowBudget(true)}
                className=" flex flex-col w-full shadow-searchField bg-white rounded-[24px] px-[24px] py-[24px] gap-[12px] items-center justify-between text-[#515151]">
                <div className="w-full items-center justify-between flex">
                    <label className="text-[16px] font-[500] text-[#515151]">Got a budget?</label>
                    <p className="font-[600] text-[16px] text-[#515151]">{budget === 0 ? "Free" : "$" + budget}</p>
                </div>
                {
                    showBudget &&
                    <div className="w-full flex justify-between gap-[12px]">
                        <p>Free!</p>
                        <input value={budget} onChange={(e) => setBudget(e.target.value)} type="range" min="0" max="200" step="5" className="flex-grow-[1]" />
                        <p>$200</p>
                    </div>
                }
            </div>
            <div
                onClick={() => setShowExtra(true)}
                className=" flex flex-col w-full shadow-searchField bg-white rounded-[24px] px-[24px] py-[24px] gap-[12px] items-start text-[#515151]">
                <div className="flex w-full items-center justify-between">
                    <label className="text-[16px] font-[500] ">Anything else?</label>
                    <p className="font-[600] text-[16px] text-[#515151]">Accessibility</p>
                </div>
                {showExtra &&
                    <div className="flex flex-col items-start w-full px-[24px] gap-[16px]">
                        <div className="flex items-center w-full gap-[10px]">
                            <input type="checkbox" className="accent-primary-pink" />
                            <p>Mobility Access.</p>
                            <p className="ml-auto">🧑‍🦽</p>
                        </div>
                        <div className="flex items-center w-full gap-[10px]">
                            <input type="checkbox" className="accent-primary-pink" />
                            <p>Language Access.</p>
                            <p className="ml-auto">🦻</p>
                        </div>
                        <div className="flex items-center w-full gap-[10px]">
                            <input type="checkbox" className="accent-primary-pink" />
                            <p>Allergies</p>
                            <p className="ml-auto">🤧</p>
                        </div>
                    </div>
                }
            </div>
        </form>
    )
}