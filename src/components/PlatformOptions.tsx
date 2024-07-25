"use client"
import Image, { StaticImageData } from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { Option } from "@/app/(auth)/sign-up/page";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface PlatformOptionProps {
    index:number
    option: Option
    updateSelectedOptions: (value:number) => void
}

export default function PlatformOption({index, option , updateSelectedOptions}:PlatformOptionProps) {
    return (
    <div onClick={() => {updateSelectedOptions(index)}} className={twMerge(option.isSelected ? `border w-5/12 flex  bg-slate-100 rounded-lg shadow-md flex-col items-center p-5 -translate-y-4  duration-500 border-blue-200 transition-transform` : "border w-5/12 flex rounded-lg shadow-md flex-col items-center p-5")}>
        <div className="text-sm w-full flex pb-2 items-center justify-center">
        <Image 
            src={option.image}
            width={27}
            height={27}
            alt={option.name}
            />
        </div>
        <span  className="text-xs tracking-wide">{option.name}</span>
    </div>
    )
}