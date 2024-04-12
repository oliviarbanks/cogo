
import { useQuery } from "@tanstack/react-query";
import ExperienceCard from "../components/ExperienceCard";


const backendRootUrl = import.meta.env.VITE_BACKEND_URL

const fetchAISuggestion = async () => {
    const aiUrl = backendRootUrl + "/api/suggestions/";
    const res = fetch( aiUrl )
    .then()
}

const Home = () => {
  const events = [
    { imageUrl: "/images/card1.jpg", date: "Today", title: "Wine and Dine Kendall", location: "0.3 miles", peopleAttending: 26, time: "7:00 pm" },
    { imageUrl: "/images/card2.jpg", date: "Today", title: "Co-ed Beach Volley", location: "1.2 miles", peopleAttending: 10, time: "10:00 am" },
    { imageUrl: "/images/card3.jpg", date: "Tomorrow", title: "Anime Lovers Game Night", location: "2.7 miles", peopleAttending: 7, time: "6:00 pm" },
    { imageUrl: "/images/card4.jpg", date: "Friday", title: "Harry Potter Marathon!!", location: "3.5 miles", peopleAttending: 20, time: "2:00 pm" },
  ]

  const [data, isLoading, error ] = useQuery(
    {
      queryKey: ['aiSuggestion'],
      queryFn: fetchAISuggestion,
      retry: 5,
    }
  );

  
  return (
    <div className="text-black h-full flex flex-col items-start">
      <div className=" h-[30%] flex items-center relative w-full ">
        <div className="w-full flex items-center justify-center ">
          <h2 className="font-[700] text-[12vw] text-left text-miami-white">Hey, <br />Sweet thang!</h2>
        </div>
        <div className="bg-yellow-400 absolute top-[95%] left-[20%] w-[60%]">
          Searchbar
        </div>
      </div>
      <div className="h-[70%]  w-full pt-[4vh] pl-[32px] flex flex-col items-start gap-[4vh] overflow-y-auto">
        <div className="w-full flex flex-col gap-[16px]">
          <h3 className="text-[24px] font-[600] text-miami-white">Perfect Match</h3>
          <div className="flex items-start overflow-x-auto flex-grow-[2] gap-[32px]">
            {
              events.map((event, index) => {
                return (
                  <ExperienceCard event={event} key={index}/>
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
                  <ExperienceCard event={event} key={index + 5}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
