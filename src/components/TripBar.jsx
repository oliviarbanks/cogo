export default function TripBar() {
    return (
        <nav className=" fixed bottom-0 w-full h-[80px] pb-0  backdrop-blur-sm" aria-label="Main Navigation ">
            <div className="px-[16px] flex items-center gap-[16px]">
                <button
                    // onClick={(e) => handlePrevStep(e)}
                    className="py-[8px] w-[calc(50%-8px)]  rounded-[24px] bg-transparent border-solid border-[1px] border-miami-white">
                    <p className="text-[20px] font-[400] ">
                        Share
                    </p>
                </button>
                <button
                    // onClick={(e) => handleNextStep(e)}
                    className="py-[8px] w-[calc(50%-8px)] bg-buttonBlue rounded-[24px] flex items-center justify-center gap-[8px]">
                    <p className="text-[20px] font-[400] text-dalePurp">
                        Save
                    </p>
                </button>
            </div>
        </nav>
    )
}