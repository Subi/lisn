import { Item } from "@/types"
import Image from "next/image"
import { convertTime } from "@/util/helper"

interface PlayerProps {
    track: Item
    progress:number
}

export default function Player({track , progress}:PlayerProps ){
    return (
        <div className="w-4/12 py-[8px] mx-auto flex justify-evenly  bg-black opacity-95 text-white rounded-full shadow-2xl">
            <div className="w-10/12  mx-auto flex pl-2  items-center">
                <div className="h-[50px] w-[50px] relative rounded-m"> 
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
                    <p className="font-semibold text-sm pt-1">{track.artists[0].name}</p>
                </div>
            </div>
            <div className="w-1/2 flex text-sm justify-end pr-6 items-center font-normal">
                    {convertTime(progress)} / {convertTime(track.duration_ms)}
            </div>
        </div>
    ) 
}