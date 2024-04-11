"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

interface SelectTriggerProps extends React.ComponentProps<typeof SelectPrimitive.Trigger> {
  className?: string;
  children?: React.ReactNode;
}

interface SelectSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  position?: string;
  value?: string;
}

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref as any}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-mainGray  px-3 py-2 text-sm  placeholder:text-mainGray focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 ",
      className
    )}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref as any}
    className={cn("flex cursor-default items-center justify-center py-1 ", className)}
    {...props}>
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref as any}
    className={cn("flex cursor-default items-center justify-center py-1 ", className)}
    {...props}>
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref as any}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-slate-200  shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2  ",
        position === "popper" &&
        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 ",
        className
      )}
      position={position as any}
      {...props}>
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn("p-1", position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] ")}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref as any}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold ", className)}
    {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(({ className, value, children, ...props }, ref) => (
  <SelectPrimitive.Item
    value={value}
    ref={ref as any}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-inputBorder data-[disabled]:pointer-events-none data-[disabled]:opacity-50  dark:focus:text-slate-50 ",
      className
    )}
    {...props}>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref as any}
    className={cn("-mx-1 my-1 h-px  dark:bg-slate-800", className)}
    {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
