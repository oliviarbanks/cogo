export default function DiscoverPage1({ categories, handleNextStep }) {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col items-start ">
                <h2 className="text-[40px] font-[700] w-[70%] self-center">What you in the mood for?</h2>
            </div>
            <p className="text-[18px] font-[400] tracking-[0.36px] w-[70%] self-center">Search to find an experience that is perfect for you!</p>
            <form className="w-[70%] self-center pb-[32px]">
                <input type="text" placeholder="Search" className="bg-yellow-500 w-full" />
            </form>
            <div className="w-[80%] self-center flex flex-wrap items-start gap-x-[12px] gap-y-[16px]">
                {categories.map((category, index) => {
                    return (
                        <button key={index + 22} className="px-[16px] py-[4px] border-solid border-[1px] border-gray-400 rounded-full text-gray-400 font-[500]">{category}</button>
                    )
                })}
            </div>
            <div className="fixed bottom-[12vw] left-0 w-full flex justify-center items-center  backdrop-blur-[2px] pb-[12vw]">
            </div>
        </div>
    )
}