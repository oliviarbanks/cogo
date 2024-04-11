"use client";
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "../../../lib/utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    (<DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 ", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 ",
        month: "space-y-4 ",
        caption: "flex pt-1 relative items-center justify-start ",
        dropdown: "bg-formInputBg text-mainGray text-right",
        dropdown_year: "flex justify-between",
        caption_label: "text-sm font-medium hidden ",
        nav: "space-x-1 flex items-center ",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 "
        ),
        nav_button_previous: "absolute right-11 border-[#E6E9EA]",
        nav_button_next: "absolute right-1 border-[#E6E9EA]",
        table: "w-full border-collapse space-y-1 ",
        head_row: "flex ",
        head_cell:
          "text-mainGray rounded-md w-9 font-[500] text-[0.8rem] dark:text-slate-400 ",
        row: "flex w-full mt-2 ",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-transparent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected])]:bg-slate-800 rounded-full",
        root: "bg-formInputBg rounded-[5px]",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-full font-[400]"
        ),
        day_selected:
          "text-darkGray bg-gpGreen hover:bg-gpGreen focus:bg-gpGreen focus:text-darkGray ",
        day_today: "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50 ",
        day_outside: "text-additionalGray ",
        day_disabled: "text-slate-500 opacity-50 dark:text-slate-400 ",
        day_range_middle:
          "aria-selected:bg-slate-100 aria-selected:text-slate-900 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50 ",
        day_hidden: "invisible ",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4 stroke-mainGray" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4 stroke-mainGray" />,
      }}
      {...props} />)
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
