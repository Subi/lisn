import { Item } from "@/types"
import Image from "next/image"


interface PlayerProps {
    track: Item
}

export default function Player(track:PlayerProps){
    return (
        <div className="w-1/2 py-3 mx-auto bg-black text-white rounded-2xl">
            <div className="w-11/12  mx-auto flex bg-blue-400">
                <div className="h-[50px] w-[50px] relative"> 
                    <Image alt={track.track.album.name} src={track.track.album.images[0].url} fill priority={true} style={{objectFit: "contain"}} quality={100}/>
                </div>
                <div className="bg-green-400 flex-col">
                    <p>{track.track.name}</p>
                    <p>{track.track.album.artist[0].name}</p>
                </div>
            </div>
        </div>
    ) 
}