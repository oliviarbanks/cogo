import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

export default function ExperienceCard({ event, aiInfo}) {
    const [info, setInfo] = useState()
    return (
        <Link to={`/experience`} state={{event: event, aiInfo: aiInfo}} className="min-h-[260px] h-[30vh] min-w-[220px] w-[55%] bg-white rounded-[8px] flex flex-col items-start">
            <div
                style={{
                    backgroundImage: "",
                }}
                className="bg-gray-400 h-[50%] w-full rounded-[8px] rounded-b-none relative">
                <img src={`${event.imageUrl}`} className="w-full max-h-[100%] rounded-[8px] rounded-b-none" />
                <svg className="absolute top-[12px] right-[12px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="heart">
                        <path id="Vector" d="M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z" fill="#222222" fillOpacity="0.3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
                <div className="flex absolute bottom-[8px] w-full items-center justify-center">
                    <svg className="" width="49" height="6" viewBox="0 0 49 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 1">
                            <circle id="Ellipse 1" cx="3" cy="3" r="3" fill="white" />
                            <circle id="Ellipse 2" cx="14" cy="3" r="3" fill="#DDDDDD" />
                            <circle id="Ellipse 3" cx="25" cy="3" r="3" fill="#DDDDDD" />
                            <circle id="Ellipse 4" cx="36" cy="3" r="3" fill="#DDDDDD" />
                            <circle id="Ellipse 5" cx="47" cy="3" r="2" fill="#DDDDDD" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className="bg-white h-[50%] w-full rounded-[8px] rounded-t-none px-[12px] flex flex-col justify-center">
                <p className="text-[12px] font-[400]">{event.date}</p>
                <p className="text-[16px] font-[600]">{aiInfo.title}</p>
                <div className="flex items-center gap-[4px]">
                    <svg className="pt-[2px]" width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="24px/solid/ic_24_location-marker">
                            <path id="Icon" fillRule="evenodd" clipRule="evenodd" d="M3.0302 2.4301C4.6704 0.789901 7.3297 0.789901 8.9699 2.4301C10.6101 4.0703 10.6101 6.7296 8.9699 8.3698L6.00005 11.3396L3.0302 8.3698C1.39 6.7296 1.39 4.0703 3.0302 2.4301ZM6.00005 6.59995C6.66279 6.59995 7.20005 6.06269 7.20005 5.39995C7.20005 4.73721 6.66279 4.19995 6.00005 4.19995C5.33731 4.19995 4.80005 4.73721 4.80005 5.39995C4.80005 6.06269 5.33731 6.59995 6.00005 6.59995Z" fill="#A0A0A0" />
                        </g>
                    </svg>
                    <p className="text-[14px] font-[400]">{`Location`}</p>
                    <p className="text-[14px] font-[400]">
                        {`(${event.location})`}
                    </p>
                </div>
                <div className="w-full flex justify-between items-center pt-[8px]">
                    <div className="flex justify-start items-start">
                        <div className="rounded-full bg-gray-300 min-w-[24px] max-w-[32px] w-[6vw] aspect-square border-solid border-white border-[1px]">
                            <img src="images/person4.png" />
                        </div>
                        <div className="rounded-full bg-gray-300 min-w-[24px] max-w-[32px] w-[6vw]  aspect-square border-solid border-white border-[1px] translate-x-[-25%]">
                            <img src="images/person1.png" />
                        </div>
                        <div className="rounded-full bg-gray-300 min-w-[24px] max-w-[32px] w-[6vw]  aspect-square border-solid border-white border-[1px] translate-x-[-50%]">
                            <img src="images/person2.png" />
                        </div>
                        <div className="rounded-full bg-gray-300 min-w-[24px] max-w-[32px] w-[6vw]  aspect-square border-solid border-white border-[1px] translate-x-[-75%]">
                            <img src="images/person3.png" />
                        </div>
                        <div className="rounded-full bg-circleOrange min-w-[24px] max-w-[32px] w-[6vw]  aspect-square border-solid border-white border-[1px] translate-x-[-100%] flex items-center justify-center">
                            <p className="text-[10px] font-[700px] text-white">
                                {`+${event.peopleAttending - 5}`}
                            </p>
                        </div>
                    </div>
                    <p className="text-[14px] font-[700]">{event.time}</p>
                </div>
            </div>
        </Link>
    )
}