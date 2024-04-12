import { Link } from "react-router-dom"
import ExperienceCard from "../components/ExperienceCard"

export default function Results() {
    const events = [
        { imageUrl: "/images/card1.jpg", date: "Today", title: "Wine and Dine Kendall", location: "0.3 miles", peopleAttending: 26, time: "7:00 pm" },
        { imageUrl: "/images/card2.jpg", date: "Today", title: "Co-ed Beach Volley", location: "1.2 miles", peopleAttending: 10, time: "10:00 am" },
        { imageUrl: "/images/card3.jpg", date: "Tomorrow", title: "Anime Lovers Game Night", location: "2.7 miles", peopleAttending: 7, time: "6:00 pm" },
        { imageUrl: "/images/card4.jpg", date: "Friday", title: "Harry Potter Marathon!!", location: "3.5 miles", peopleAttending: 20, time: "2:00 pm" },
    ]
    return (
        <div className="text-black h-full flex flex-col items-start">
            <div className=" h-[30%] flex items-center relative w-full ">
                <div className="w-full flex items-center justify-center ">
                    <h2 className="font-[700] text-[12vw] text-left text-miami-white w-[75%]">Look at what we found!</h2>
                </div>
                <Link to="/search" className="flex items-center justify-start rounded-[50px] bg-white absolute top-[90%] left-[50%] w-[75%] z-[30] gap-[8px] -translate-x-[50%]">
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
                </Link>
            </div>
            <div className="h-[70%] pb-[80px]  w-full pt-[4vh] pl-[32px] flex flex-col items-start gap-[4vh] overflow-y-auto">
                <div className="w-full flex flex-col gap-[16px]">
                    <h3 className="text-[24px] font-[600] text-miami-white">Perfect Match</h3>
                    <div className="flex items-start overflow-x-auto flex-grow-[2] gap-[32px]">
                        {
                            events.map((event, index) => {
                                return (
                                    <ExperienceCard event={event} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-full flex flex-col gap-[16px] pb-[32px]">
                    <h3 className="text-[24px] font-[600] text-miami-white">Wallet Friendly</h3>
                    <div className="flex items-start overflow-x-auto flex-grow-[2] gap-[32px]">
                        {
                            events.map((event, index) => {
                                return (
                                    <ExperienceCard event={event} key={index + 5} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};