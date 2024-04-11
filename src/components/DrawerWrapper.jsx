import React from "react";

export default function Drawer({ children, isOpen, setIsOpen }) {
    return (
        // Transition
        <div
            className={
                "fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 in set-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >   
            {/* Content */}
            <section
                className={
                    "w-screen h-[40vh] absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <div className="relative w-screen flex flex-col space-y-6 overflow-y-scroll h-full">
                    {children}
                </div>
            </section>
            {/* Click out */}
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </div>
    );
}
