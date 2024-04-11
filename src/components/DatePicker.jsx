import { format } from "date-fns"
import { cn } from "../../lib/utils"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./ui/popover"
import { useState } from "react"

export default function DatePicker() {
    const [date, setDate] = useState()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    className={cn(
                        "w-full justify-start text-left font-normal bg-formInputBg min-h-[48px] px-[12px] border-solid border-[1px] border-mainGray focus:border-gpGreen ",
                        !date && "text-muted-foreground"
                    )}
                >
                    {date ? format(date, "PPP") : <span className="text-additionalGray text-[12px] font-[600]">Today</span>}
                    <svg className="ml-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM11 11H13V13H11V11ZM16 11H18V13H16V11Z" fill="#E6E9EA" />
                    </svg>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-formInputBg text-mainGray">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    captionLayout="dropdown-buttons"
                    fromYear={1920}
                    toYear={2050}
                    className={""}
                    classNames={""}
                />
            </PopoverContent>
        </Popover>
    )
}
