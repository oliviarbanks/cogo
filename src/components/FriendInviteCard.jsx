import { useState } from "react"

export default function FriendInviteCard({ imageUrl }) {
    const [inviteSent, setInviteSent] = useState(false)
    const handleInviteSend = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setInviteSent(true)
    }
    return (
        <div
            onClick={(e) => handleInviteSend(e)}
            className="w-full flex justify-between items-center border-b-solid border-b-[1px] border-b-[#C4C4C4] py-[8px] px-[20px]">
            <div className="flex gap-[8px] items-center">
                <img src={imageUrl} className="rounded-full w-[40px] aspect-square" />
                <p>Sarah</p>
            </div>
            <div className={`w-[20px] rounded-full aspect-square border-solid border-[1px] border-black relative ${!inviteSent ? "bg-transparent" : "bg-miami-pink"}`}>
                {
                    inviteSent &&
                    <svg className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]" width="20" height="20" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 5318" filter="url(#filter0_d_394_2451)">
                            <ellipse id="Ellipse 675" cx="18.8846" cy="16" rx="16.1151" ry="16" fill="#F539B7" />
                            <path id="Vector" d="M14.5872 8.46655H8.14111M11.3641 23.3999H8.14111M9.21545 15.9332H8.14111M22.5265 8.69055L24.0414 11.6986C24.2455 12.1146 24.7934 12.5092 25.2554 12.5946L27.9949 13.0426C29.7461 13.3306 30.1544 14.5892 28.8974 15.8479L26.7594 17.9706C26.4049 18.3226 26.2008 19.0159 26.319 19.5172L26.9313 22.1412C27.4148 24.2106 26.2975 25.0212 24.4603 23.9332L21.8927 22.4186C21.4307 22.1412 20.6572 22.1412 20.1952 22.4186L17.6275 23.9332C15.7904 25.0106 14.6731 24.2106 15.1566 22.1412L15.7689 19.5172C15.8871 19.0266 15.683 18.3332 15.3285 17.9706L13.1905 15.8479C11.9335 14.5999 12.3418 13.3412 14.093 13.0426L16.8325 12.5946C17.2945 12.5199 17.8424 12.1146 18.0465 11.6986L19.5614 8.69055C20.3671 7.05855 21.6993 7.05855 22.5265 8.69055Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_394_2451" x="0.769531" y="0" width="36.23" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="1" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_394_2451" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_394_2451" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                }
            </div>
        </div>
    )
}