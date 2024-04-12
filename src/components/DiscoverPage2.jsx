import SearchDetailsForm from "./SearchDetailsForm";

export default function DiscoverPage2({handleForm,  handleNextStep }) {
    return (
        <div className="w-full flex flex-col gap-[16px] text-miami-white">
            <div className="flex flex-col items-start ">
                <h2 className="text-[40px] font-[700] w-[70%] self-center leading-[3rem]">It's gonna be a good time!</h2>
                <p className="text-[18px] font-[400] tracking-[0.36px] w-[70%] self-center pt-[8px]">Share some details to find the perfect experience <span className="italic">just</span> for you!</p>
            </div>
            <SearchDetailsForm handleForm = {handleForm} handleNextStep={handleNextStep}/>
        </div>
    )
}