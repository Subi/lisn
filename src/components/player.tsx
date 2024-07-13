"use client"
import { Item } from "@/types"
import Image from "next/image"
import { convertTime } from "@/util/helper"
import { Progress } from "./ui/progress"
import { useEffect, useRef, useState } from "react"

interface PlayerProps {
    track: Item
    progress:number
}

export default function Player({track , progress}:PlayerProps ){
    const [count , setCount] = useState<number>(Math.floor(progress / track.duration_ms * 100))

    useEffect(() => {
        const id = setInterval(() => setCount((oldCount) => oldCount + 1), 2000);
        return () => {
            clearInterval(id)
        }
    } , [])

    return (
        <div className="w-5/12 py-[7px] mx-auto flex justify-between  absolute  bottom-7 left-0 right-0   bg-black opacity-95 text-white rounded-full shadow-2xl">
            <div className=" flex pl-3  items-center">
                <div className="h-[45px] w-[45px] relative rounded-m"> 
                    <Image 
                        alt={track.album.name} 
                        src={track.album.images[0].url} 
                        fill
                        priority={true} 
                        style={{objectFit: "contain" , borderRadius: "50%"}} 
                        quality={100}/>
                </div>
                <div className="flex-col pl-3 tracking-wide">
                    <p className="text-sm font-normal">{track.name}</p>
                    <p className="font-semibold text-sm pt-[1px]">{track.artists[0].name}</p>
                </div>
            </div>
            <div className=" w-6/12 pr-10 flex items-center ">
            <div className="w-full flex justify-between  items-center">
            {convertTime(progress)}
            <Progress className="w-9/12 [&>*]:bg-white" value={count}/>
            {convertTime(track.duration_ms)}
            </div>
            </div>
        </div>
    ) 
}