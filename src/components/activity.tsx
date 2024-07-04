"use client"
import { Item, SpotifyApiResponse, StreamingTrackResponse } from "@/server/spotify/interface"
import { Avatar , AvatarImage } from "@radix-ui/react-avatar"
import Image from "next/image"
import { useEffect , useState } from "react"


interface UserStreamingActivityProps {
    accessToken: string
    track: Item
}



export default function UserStreamingActivity({accessToken , track}:UserStreamingActivityProps) {
    const [activity , setActivity] = useState<Item>(track)
    const updateStreamingActivity = async () => {
        const response =  await fetch('api/spotify/activity')
        const data =  await response.json()
        setActivity(data.track.item)
    }      

    useEffect(() => {
        const activityId =  setInterval(() => {
            updateStreamingActivity()
        } , 3000)

        return () => {
            clearInterval(activityId)
        }
    } , [])

    return (
        <div className="w-1/2 mx-auto flex justify-evenly  pt-20">

            <div className=" w-4/12 py-4 px-4 flex-col items-center justify-between border-green-200 border-2  shadow-2xl rounded-xl">
            <div className="w-full flex  justify-between pb-3">
            <Avatar className="w-[25px] h-[25px]">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <p className="text-slate-500 text-xs tracking-normal font-medium ">a few minutes ago</p>
            </div>
            <div className="flex items-center justify-between">
            <div className="flex-col tracking-wide">
                <div className="flex-col w-full text-sm font-normal ">
                  <p>{activity.name}</p>
                  <p className="font-semibold ">{activity.artists[0].name}</p>
                </div>
            </div>
            <div className="h-[50px] w-[50px] relative rounded-m"> 
                      <Image 
                          alt="wunna" 
                          src={activity.album.images[0].url} 
                          fill
                          priority={true} 
                          style={{objectFit: "contain", borderRadius: "25%"}} 
                          quality={100}/>
                  </div>
            </div>
            </div>
        <div className=" w-4/12 py-4 px-4 flex-col items-center justify-between border-red-200 border-2 shadow-2xl rounded-xl">
        <div className="w-full flex  justify-between pb-3">
        <Avatar className="w-[25px] h-[25px]">
            <AvatarImage src="https://avatars.githubusercontent.com/u/33818392?s=96&v=4" alt="@shadcn" />
        </Avatar>
    
        <p className="text-slate-500 text-xs tracking-normal font-medium ">a few minutes ago</p>
        </div>
        <div className="flex items-center justify-between">
        <div className="flex-col tracking-wide">
            <div className="flex-col w-full text-sm font-normal ">
              <p>all the way</p>
              <p className="font-semibold ">buildspace</p>
            </div>
        </div>
        <div className="h-[50px] w-[50px] relative rounded-m"> 
                  <Image 
                      alt="wunna" 
                      src="https://i.scdn.co/image/ab67616d0000b27314fb11890bf90d9c548f6fd2" 
                      fill
                      priority={true} 
                      style={{objectFit: "contain", borderRadius: "25%"}} 
                      quality={100}/>
              </div>
        </div>
        </div>
    </div>
    )

}   