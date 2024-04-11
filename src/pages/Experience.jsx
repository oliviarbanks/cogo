import { useState } from "react"
import ShareModal from "../components/ShareModal"

export default function Experience() {
    const [shareModal, setShareModal] = useState(false)

    const handleOpenModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setShareModal(true)
    }
    return (
        <div
            onClick={() => setShareModal(false)}
            className="text-black h-full flex flex-col items-start bg-white relative">
            {shareModal &&
                <ShareModal />
            }
            <div className="w-full">
                <img src="/images/experience1.png" />
            </div>
            <div className="px-[42px] w-full overflow-y-auto">
                <div className="flex flex-col gap-[4px] items-start w-[90%] border-b-[1px] border-b-solid border-b-[#7070703D] py-[24px]">
                    <h2 className="text-[14px] font-[400] text-[#515151]">Event Title</h2>
                    <p className="text-[#515151] text-[16px] font-[700]">Arcade Competition</p>
                </div>
                <div className="flex items-start justify-between w-[90%] py-[24px] border-b-[1px] border-b-solid border-b-[#7070703D] gap-[12px]">
                    <div className="flex flex-col items-start">
                        <h2 className="text-[14px] font-[400] text-[#515151]">Date</h2>
                        <div className="flex gap-[12px] items-center">
                            <p className="text-[#515151] text-[16px] font-[700]">April 10, 2024</p>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="calendar (1)">
                                    <g id="Group 1121" opacity="0.6">
                                        <path id="Path 663" opacity="0.6" d="M5.87003 9.30353C5.87003 9.20911 5.83253 9.11855 5.76576 9.05179C5.699 8.98503 5.60846 8.94751 5.51404 8.94751H4.27103C4.17662 8.94751 4.08607 8.98503 4.0193 9.05179C3.95254 9.11855 3.91504 9.20911 3.91504 9.30353V10.5465C3.91504 10.6409 3.95254 10.7315 4.0193 10.7982C4.08607 10.865 4.17662 10.9025 4.27103 10.9025H5.51404C5.60846 10.9025 5.699 10.865 5.76576 10.7982C5.83253 10.7315 5.87003 10.6409 5.87003 10.5465V9.30353Z" fill="#F539B7" />
                                        <path id="Path 664" opacity="0.6" d="M8.97624 9.30353C8.97624 9.20911 8.93874 9.11855 8.87198 9.05179C8.80522 8.98503 8.71466 8.94751 8.62024 8.94751H7.37724C7.28283 8.94751 7.19228 8.98503 7.12552 9.05179C7.05876 9.11855 7.02124 9.20911 7.02124 9.30353V10.5465C7.02124 10.6409 7.05876 10.7315 7.12552 10.7982C7.19228 10.865 7.28283 10.9025 7.37724 10.9025H8.62024C8.71466 10.9025 8.80522 10.865 8.87198 10.7982C8.93874 10.7315 8.97624 10.6409 8.97624 10.5465V9.30353Z" fill="#F539B7" />
                                        <path id="Path 665" opacity="0.6" d="M12.0832 9.30353C12.0832 9.20911 12.0457 9.11855 11.9789 9.05179C11.9121 8.98503 11.8216 8.94751 11.7272 8.94751H10.4842C10.3897 8.94751 10.2992 8.98503 10.2325 9.05179C10.1657 9.11855 10.1282 9.20911 10.1282 9.30353V10.5465C10.1282 10.6409 10.1657 10.7315 10.2325 10.7982C10.2992 10.865 10.3897 10.9025 10.4842 10.9025H11.7302C11.8246 10.9025 11.9151 10.865 11.9819 10.7982C12.0487 10.7315 12.0862 10.6409 12.0862 10.5465L12.0832 9.30353Z" fill="#F539B7" />
                                        <path id="Path 666" opacity="0.6" d="M5.87003 12.4075C5.87003 12.3131 5.83253 12.2226 5.76576 12.1558C5.699 12.089 5.60846 12.0515 5.51404 12.0515H4.27103C4.17662 12.0515 4.08607 12.089 4.0193 12.1558C3.95254 12.2226 3.91504 12.3131 3.91504 12.4075V13.6505C3.91504 13.7449 3.95254 13.8355 4.0193 13.9023C4.08607 13.969 4.17662 14.0065 4.27103 14.0065H5.51404C5.60846 14.0065 5.699 13.969 5.76576 13.9023C5.83253 13.8355 5.87003 13.7449 5.87003 13.6505V12.4075Z" fill="#F539B7" />
                                        <path id="Path 667" opacity="0.6" d="M8.97624 12.4075C8.97624 12.3131 8.93874 12.2226 8.87198 12.1558C8.80522 12.089 8.71466 12.0515 8.62024 12.0515H7.37724C7.28283 12.0515 7.19228 12.089 7.12552 12.1558C7.05876 12.2226 7.02124 12.3131 7.02124 12.4075V13.6505C7.02124 13.7449 7.05876 13.8355 7.12552 13.9023C7.19228 13.969 7.28283 14.0065 7.37724 14.0065H8.62024C8.71466 14.0065 8.80522 13.969 8.87198 13.9023C8.93874 13.8355 8.97624 13.7449 8.97624 13.6505V12.4075Z" fill="#F539B7" />
                                        <path id="Path 668" opacity="0.6" d="M12.0832 12.4075C12.0832 12.3131 12.0457 12.2226 11.9789 12.1558C11.9121 12.089 11.8216 12.0515 11.7272 12.0515H10.4842C10.3897 12.0515 10.2992 12.089 10.2325 12.1558C10.1657 12.2226 10.1282 12.3131 10.1282 12.4075V13.6505C10.1282 13.7449 10.1657 13.8355 10.2325 13.9023C10.2992 13.969 10.3897 14.0065 10.4842 14.0065H11.7302C11.8246 14.0065 11.9151 13.969 11.9819 13.9023C12.0487 13.8355 12.0862 13.7449 12.0862 13.6505V12.4075H12.0832Z" fill="#F539B7" />
                                        <path id="Path 669" opacity="0.6" d="M14.3051 2.3916V4.2916C14.3053 4.49557 14.2652 4.69756 14.1871 4.88599C14.109 5.07443 13.9945 5.24559 13.8501 5.38968C13.7057 5.53377 13.5343 5.64795 13.3458 5.72567C13.1572 5.80339 12.9551 5.84313 12.7511 5.8426H11.7711C11.3586 5.84393 10.9624 5.68161 10.6694 5.39123C10.3764 5.10085 10.2105 4.70612 10.2081 4.2936V2.3936H5.79015V4.2936C5.78777 4.70612 5.62189 5.10085 5.32888 5.39123C5.03588 5.68161 4.63967 5.84393 4.22715 5.8426H3.24715C3.04335 5.84313 2.84144 5.80346 2.65299 5.72586C2.46454 5.64826 2.29324 5.53427 2.1489 5.39039C2.00456 5.24651 1.89001 5.07558 1.8118 4.88738C1.7336 4.69918 1.69328 4.4974 1.69315 4.2936V2.3936C1.32798 2.40575 0.981719 2.55887 0.727027 2.82084C0.472334 3.0828 0.329015 3.43324 0.327149 3.7986V14.9206C0.32688 15.2946 0.474777 15.6534 0.738469 15.9186C1.00216 16.1838 1.36017 16.3338 1.73415 16.3356H14.2641C14.638 16.3335 14.9959 16.1835 15.2595 15.9183C15.5232 15.6532 15.6712 15.2945 15.6711 14.9206V3.7966C15.6693 3.43124 15.526 3.0808 15.2713 2.81884C15.0166 2.55688 14.6703 2.40375 14.3051 2.3916ZM13.8501 14.2286C13.8501 14.3084 13.8344 14.3875 13.8039 14.4613C13.7733 14.535 13.7285 14.6021 13.6721 14.6585C13.6156 14.715 13.5486 14.7598 13.4748 14.7903C13.4011 14.8209 13.322 14.8366 13.2421 14.8366H2.72915C2.64931 14.8366 2.57024 14.8209 2.49648 14.7903C2.42271 14.7598 2.35569 14.715 2.29923 14.6585C2.24277 14.6021 2.19799 14.535 2.16743 14.4613C2.13688 14.3875 2.12115 14.3084 2.12115 14.2286V8.4826C2.12115 8.32135 2.18521 8.1667 2.29923 8.05268C2.41325 7.93866 2.5679 7.8746 2.72915 7.8746H13.2421C13.4034 7.8746 13.558 7.93866 13.6721 8.05268C13.7861 8.1667 13.8501 8.32135 13.8501 8.4826V14.2286Z" fill="#F539B7" />
                                        <path id="Path 670" opacity="0.6" d="M3.24323 4.82153H4.21323C4.35459 4.82153 4.49015 4.76538 4.59011 4.66542C4.69007 4.56546 4.74622 4.42989 4.74622 4.28853V1.17753C4.74622 1.10745 4.73241 1.03806 4.70556 0.973331C4.67871 0.908599 4.63936 0.849797 4.58976 0.80029C4.54016 0.750784 4.48129 0.711544 4.4165 0.684817C4.35172 0.65809 4.28231 0.644401 4.21223 0.644532H3.24223C3.10087 0.644532 2.96529 0.700687 2.86533 0.800644C2.76538 0.900601 2.70923 1.03617 2.70923 1.17753V4.28953C2.70936 4.35953 2.72328 4.42881 2.75018 4.49343C2.77709 4.55804 2.81646 4.61673 2.86604 4.66613C2.91563 4.71553 2.97446 4.75468 3.03918 4.78134C3.10389 4.80801 3.17323 4.82166 3.24323 4.82153Z" fill="#F539B7" />
                                        <path id="Path 671" opacity="0.6" d="M11.7591 4.82153H12.7291C12.7991 4.82153 12.8684 4.80775 12.9331 4.78096C12.9977 4.75417 13.0565 4.71491 13.106 4.66542C13.1555 4.61593 13.1947 4.55717 13.2215 4.4925C13.2483 4.42784 13.2621 4.35853 13.2621 4.28853V1.17753C13.2621 1.10745 13.2483 1.03806 13.2214 0.973331C13.1946 0.908599 13.1552 0.849797 13.1056 0.80029C13.056 0.750784 12.9972 0.711544 12.9324 0.684817C12.8676 0.65809 12.7982 0.644401 12.7281 0.644532H11.7581C11.6167 0.644532 11.4812 0.700687 11.3812 0.800644C11.2812 0.900601 11.2251 1.03617 11.2251 1.17753V4.28953C11.2252 4.35953 11.2391 4.42881 11.2661 4.49343C11.293 4.55804 11.3323 4.61673 11.3819 4.66613C11.4315 4.71553 11.4903 4.75468 11.5551 4.78134C11.6198 4.80801 11.6891 4.82166 11.7591 4.82153Z" fill="#F539B7" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-[14px] font-[400] text-[#515151]">Time</h2>
                        <div className="flex gap-[12px] items-center">
                            <p className="text-[#515151] text-[16px] font-[700]">7:00 AM</p>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="clock (1)" opacity="0.6" d="M8.6607 0.644531C7.10891 0.644531 5.59196 1.10469 4.3017 1.96682C3.01143 2.82895 2.00579 4.05433 1.41194 5.488C0.818097 6.92167 0.66272 8.49923 0.965459 10.0212C1.2682 11.5432 2.01546 12.9412 3.11274 14.0385C4.21002 15.1358 5.60805 15.883 7.13002 16.1858C8.652 16.4885 10.2296 16.3331 11.6632 15.7393C13.0969 15.1454 14.3223 14.1398 15.1844 12.8495C16.0465 11.5593 16.5067 10.0423 16.5067 8.49053C16.5046 6.41029 15.6773 4.41586 14.2063 2.94491C12.7354 1.47396 10.7409 0.646649 8.6607 0.644531V0.644531ZM12.3917 12.5445C12.3311 12.6052 12.259 12.6534 12.1798 12.6863C12.1005 12.7191 12.0155 12.736 11.9297 12.736C11.8439 12.736 11.7589 12.7191 11.6796 12.6863C11.6004 12.6534 11.5283 12.6052 11.4677 12.5445L8.1987 9.27953C8.13781 9.21899 8.0895 9.147 8.05655 9.06771C8.02359 8.98842 8.00665 8.9034 8.0067 8.81753V4.56753C8.0067 4.39408 8.0756 4.22773 8.19825 4.10508C8.3209 3.98243 8.48725 3.91353 8.6607 3.91353C8.83415 3.91353 9.0005 3.98243 9.12315 4.10508C9.2458 4.22773 9.3147 4.39408 9.3147 4.56753V8.54453L12.3927 11.6215C12.4534 11.6822 12.5016 11.7542 12.5344 11.8335C12.5673 11.9127 12.5842 11.9977 12.5842 12.0835C12.5842 12.1693 12.5673 12.2543 12.5344 12.3336C12.5016 12.4129 12.4534 12.4849 12.3927 12.5455L12.3917 12.5445Z" fill="#F539B7" fillOpacity="0.6" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start py-[24px] gap-[4px]">
                    <h2 className="text-[#515151] text-[16px] font-[700]">Description</h2>
                    <p>Join the Yogies of Miami at a morning beach sesh. invite your frineds, bring your pets. Join the Yogies of Miami at a morning beach sesh. invite your frineds, bring your pets.</p>
                </div>
                <div className="flex flex-col items-start pb-[24px] gap-[4px]">
                    <h2 className="text-[#515151] text-[16px] font-[700]">Going</h2>
                    <div className="flex items-center justify-start gap-[4px]">
                        <img src="/images/person1.png" className="rounded-full w-[40px] aspect-square" />
                        <img src="/images/person2.png" className="rounded-full w-[40px] aspect-square" />
                        <img src="/images/person3.png" className="rounded-full w-[40px] aspect-square" />
                        <img src="/images/person4.png" className="rounded-full w-[40px] aspect-square" />
                        <div className="relative w-[40px]" onClick={(e) => handleOpenModal(e)}>
                            <svg className="" width="40" height="40" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Ellipse 31">
                                    <path id="Vector" d="M20.5 40.5C31.5457 40.5 40.5 31.5457 40.5 20.5C40.5 9.4543 31.5457 0.5 20.5 0.5C9.4543 0.5 0.5 9.4543 0.5 20.5C0.5 31.5457 9.4543 40.5 20.5 40.5Z" stroke="#009FF5" strokeDasharray="3 3" />
                                </g>
                            </svg>
                            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Path 673" d="M10.9509 7.36694V5.43595H6.57485V0.668945H4.44785V5.43595H0.0478516V7.36694H4.44785V12.3299H6.57485V7.36694H10.9509Z" fill="#009FF5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start pb-[24px] gap-[4px]">
                    <h2 className="font-[400] text-[14px]">Price</h2>
                    <p className="text-[16px] font-[700] text-[#515151]">$15/Person</p>
                </div>
                <div className="flex flex-col items-start pb-[24px] gap-[4px]">
                    <div className="flex items-center justify-between w-full">
                        <h2 className="font-[700] text-[16px] text-[#515151]">Map</h2>
                        <p className="text-[14px] font-[400] text-[#515151]">{`10 minutes (0.2 miles)`}</p>
                    </div>
                    <img src="/images/map1.png" />
                </div>
            </div>
        </div>
    )
}