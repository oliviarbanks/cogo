export default function SearchNextBar({ handlePrevStep, handleNextStep }) {
    return (
        <nav className=" fixed bottom-0 w-full h-[80px] pb-0  shadow-searchField" aria-label="Main Navigation ">
            <div className="px-[16px] flex items-center gap-[16px]">
                <button 
                onClick={(e) => handlePrevStep(e)}
                className="py-[8px] w-[calc(50%-8px)] border-solid border-[1px] border-black rounded-[24px]">Clear All</button>
                <button 
                onClick={(e) => handleNextStep(e)}
                className="py-[8px] w-[calc(50%-8px)] bg-buttonBlue rounded-[24px] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon / Search">
                            <path id="Vector" d="M10.5 17C11.8832 17.0024 13.2308 16.5616 14.345 15.742H14.344C14.3733 15.782 14.406 15.8203 14.442 15.857L18.292 19.707C18.4795 19.8946 18.7339 20.0001 18.9991 20.0002C19.2644 20.0003 19.5189 19.895 19.7065 19.7075C19.8941 19.52 19.9996 19.2656 19.9997 19.0004C19.9998 18.7351 19.8945 18.4806 19.707 18.293L15.857 14.443C15.8213 14.4068 15.7828 14.3734 15.742 14.343C16.5611 13.2293 17.002 11.8825 17 10.5C17 8.77609 16.3152 7.12279 15.0962 5.90381C13.8772 4.68482 12.2239 4 10.5 4C8.77609 4 7.12279 4.68482 5.90381 5.90381C4.68482 7.12279 4 8.77609 4 10.5C4 12.2239 4.68482 13.8772 5.90381 15.0962C7.12279 16.3152 8.77609 17 10.5 17ZM10.5 8.482C12.164 6.809 16.325 9.736 10.5 13.5C4.675 9.736 8.836 6.81 10.5 8.482Z" fill="#A0A0A0" />
                        </g>
                    </svg>
                    <p>
                        Dale
                    </p>
                </button>
            </div>
        </nav>
    )
}