import ExperienceCard from "../components/ExperienceCard"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const backendRootUrl = import.meta.env.VITE_BACKEND_URL

export default function Results() {
    const events = [
        { date: "Today", title: "Wine and Dine Kendall", location: "0.3 miles", peopleAttending: 26, time: "7:00 pm" },
        { date: "Today", title: "Co-ed Beach Volley", location: "1.2 miles", peopleAttending: 10, time: "10:00 am" },
        { date: "Tomorrow", title: "Anime Lovers Game Night", location: "2.7 miles", peopleAttending: 7, time: "6:00 pm" },
        { date: "Friday", title: "Harry Potter Marathon!!", location: "3.5 miles", peopleAttending: 20, time: "2:00 pm" },
    ]
    let location = useLocation();

    const [suggestionsPlaces, setSuggestionsPlaces] = useState([])
    const [suggestionsEvents, setSuggestionsEvents] = useState([])

    const fetchAISuggestion = async () => {
        console.log("Sending request")
        const aiUrl = backendRootUrl + "api/suggestions/";
        try {
            const res = await fetch(aiUrl, {
                method: "POST",
                mode: "cors",
                body: JSON.stringify({
                    prefs: location.state ? location.state["AI"] : []
                })
            })
                .then(async (res) => {
                    console.log("Recieved AI!")
                    return await res.json()
                })
            if (res.success) {
                setSuggestionsEvents(res.data.event)
                setSuggestionsPlaces(res.data.activity)
            }
            return res.data
        } catch (e) {
            console.log(e)
            throw new Error(e);
        }
    }
    const { data: aiSuggestion, isLoading, error } = useQuery({
        queryKey: ["aiSuggestion"],
        queryFn: () => fetchAISuggestion(),
        retry: 5,
        keepPreviousData: true,
    });

    console.log(suggestionsEvents)
    console.log(suggestionsPlaces)

    return (
        <div className="text-black h-full flex flex-col items-start">
            <div className="bg-gray-200 h-[30%] flex items-center relative w-full ">
                <div className="w-full flex items-center justify-center ">
                    <h2 className="font-[700] text-[12vw] text-left ">Look at what we found!</h2>
                </div>
                <div className="bg-yellow-400 absolute top-[95%] left-[20%] w-[60%]">
                    Searchbar
                </div>
            </div>
            <div className="h-[70%] bg-blue-500 w-full pt-[4vh] pl-[32px] flex flex-col items-start gap-[4vh] overflow-y-auto">
                <div className="w-full flex flex-col gap-[16px]">
                    <h3 className="text-[24px] font-[600]">Perfect Match</h3>
                    <div className="flex items-start overflow-x-auto flex-grow-[2] gap-[32px]">
                        {isLoading && <h2> Loading ... </h2>}
                        {!isLoading &&
                            events.map((event, index) => {
                                return (
                                    <ExperienceCard event={event} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-full flex flex-col gap-[16px] pb-[32px]">
                    <h3 className="text-[24px] font-[600]">Wallet Friendly</h3>
                    <div className="flex items-start overflow-x-auto flex-grow-[2] gap-[32px]">
                        {isLoading && <h2> Loading ... </h2>}
                        {!isLoading &&
                            events.map((event, index) => {
                                return (
                                    <ExperienceCard  event={event} key={index + 5} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};