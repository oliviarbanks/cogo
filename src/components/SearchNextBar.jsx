export default function SearchNextBar({ handlePrevStep, handleNextStep }) {
    return (
        <nav className=" fixed bottom-0 w-full h-[80px] pb-0  backdrop-blur-sm" aria-label="Main Navigation ">
            <div className="px-[16px] flex items-center gap-[16px]">
                <button
                    onClick={(e) => handlePrevStep(e)}
                    className="py-[8px] w-[calc(50%-8px)]  rounded-[24px] bg-miami-white">
                    <p className="text-[20px] font-[400] ">
                        Clear All
                    </p>
                </button>
                <button
                    onClick={(e) => handleNextStep(e)}
                    className="py-[8px] w-[calc(50%-8px)] bg-buttonBlue rounded-[24px] flex items-center justify-center gap-[8px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <g clip-path="url(#clip0_430_3340)">
                            <path d="M7.8125 14.625C9.36859 14.6278 10.8846 14.1317 12.1381 13.2097H12.137C12.17 13.2547 12.2067 13.2979 12.2472 13.3391L16.5785 17.6704C16.7894 17.8815 17.0756 18.0001 17.374 18.0002C17.6725 18.0003 17.9587 17.8819 18.1698 17.6709C18.3809 17.46 18.4996 17.1738 18.4997 16.8754C18.4998 16.577 18.3813 16.2907 18.1704 16.0796L13.8391 11.7484C13.7989 11.7076 13.7557 11.67 13.7097 11.6359C14.6313 10.383 15.1273 8.86782 15.125 7.3125C15.125 5.3731 14.3546 3.51314 12.9832 2.14178C11.6119 0.770422 9.75189 0 7.8125 0C5.8731 0 4.01314 0.770422 2.64178 2.14178C1.27042 3.51314 0.5 5.3731 0.5 7.3125C0.5 9.2519 1.27042 11.1119 2.64178 12.4832C4.01314 13.8546 5.8731 14.625 7.8125 14.625ZM7.8125 5.04225C9.6845 3.16012 14.3656 6.453 7.8125 10.6875C1.25938 6.453 5.9405 3.16125 7.8125 5.04225Z" fill="#27123C" fill-opacity="0.8" />
                        </g>
                        <defs>
                            <clipPath id="clip0_430_3340">
                                <rect width="18" height="18" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className="text-[20px] font-[400] ">
                        Dale!
                    </p>
                </button>
            </div>
        </nav>
    )
}