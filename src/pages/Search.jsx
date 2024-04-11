import { Link } from "react-router-dom";
import DiscoverPage1 from "../components/DiscoverPage1";
import { useState } from "react";
import DiscoverPage2 from "../components/DiscoverPage2";

const Search = () => {
  const categories = [
    "Art Show",
    "Arcade Games",
    "Park",
    "Paint",
    "Ceramics",
    "Run",
    "Dance",
    "Salsa",
    "Bachata",
    "Live Music",
    "Pitbull",
    "Perro",
    "Silent Disco",
    "Night Yoga",
    "Beach",
    "Cafecito",
    "Outdoors",
    "Flowers",
    "Cafe",
    "Udon",
    "Sushi",
    "Activity / Mood",
    "Activity / Mood",
    "Activity / Mood",
    "Activity / Mood",
    "Activity / Mood",
    "Activity / Mood",
    "Activity / Mood",
    "Activity / Mood",
  ]
  const [step, setStep] = useState(0)

  const handleNextStep = (e) => {
    // console.log(e)
    e.preventDefault()
    setStep(prev => prev + 1)
  }
  return (
    <div className="text-black h-full flex flex-col items-start gap-[16px] overflow-y-auto">
      <div className="w-full flex justify-between items-center px-[16px] pt-[16px]">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none">
            <path d="M9.60864 1L1.12336 9.48528L9.60864 17.9706" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <h1 className="text-[24px] font-[600] tracking-[1.5px]">Discover</h1>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Icons">
            <g id="Group 2">
              <path id="Vector 10" d="M12.4856 3.02297C10.9156 2.87405 7.30445 3.38038 5.42039 6.59707C3.06532 10.6179 5.42039 19.1065 2.12329 20H12.4856" stroke="black" strokeWidth="1.8" strokeLinejoin="round" />
              <path id="Vector 11" d="M11.5436 3.02297C13.1136 2.87405 16.7247 3.38038 18.6088 6.59707C20.9639 10.6179 18.6088 19.1065 21.9059 20H11.5436" stroke="black" strokeWidth="1.8" strokeLinejoin="round" />
            </g>
            <path id="Ellipse 68" d="M9.18848 22C9.66415 23.1773 10.7505 24 12.0146 24C13.2786 24 14.365 23.1773 14.8407 22H9.18848Z" fill="black" />
            <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M13.6466 3C13.8069 2.70583 13.8986 2.36429 13.8986 2C13.8986 0.89543 13.0551 0 12.0146 0C10.974 0 10.1305 0.89543 10.1305 2C10.1305 2.36429 10.2222 2.70583 10.3825 3H13.6466Z" fill="black" />
          </g>
        </svg>
      </div>
      {step === 0 && <DiscoverPage1 categories={categories} handleNextStep={handleNextStep} />}
      {step === 1 && <DiscoverPage2 categories={categories} handleNextStep={handleNextStep} />}
    </div>
  )
};

export default Search;
