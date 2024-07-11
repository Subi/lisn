import Image from "next/image";
import Header from "../components/header";
import Player from "@/components/player";
import Link from "next/link";
import { getAccessToken, getCurrentPlayingTrack } from "@/server/spotify/index";
import { StreamingTrackResponse, TokenResponse } from "@/server/spotify/interface";
import UserStreamingActivity from "@/components/activity";
import { Button } from "@/components/ui/button";
import Scroller from "@/components/scroller";
import { Skeleton } from "@/components/ui/skeleton";


export default async function Home() {
  const response:TokenResponse = await getAccessToken()
  const playingTrack:StreamingTrackResponse = await getCurrentPlayingTrack(response.access_token)
  console.log(playingTrack)
  return (
    <main className="w-full flex-col items-center  justify-center">
      <Header/>
      <section className="w-9/12  mx-auto flex justify-between  py-28">
        <div className="flex-col ">
          <h1 className="text-6xl tracking-wide font-bold pb-24 xl:text-5xl xl:leading-snug">See what songs people are currently listening too.</h1>
          <Link href="https://form.typeform.com/to/UzO3AdNc">
            <Button variant="default" className="text-lg tracking-wide bg-black text-white font-semibold py-5 px-10 rounded-md hover:bg-black">Get Started </Button>          
          </Link>
        </div>
        <div className="w-4/12 justify-start flex-col mr-10 xl:w-6/12">
        <div className="w-full ">
            <p className=" text-md tracking-wide font-semibold">
              Recent Activity
            <span className="relative flex h-2 w-2 ">
            <span className="animate-ping absolute left-[140px] -top-6 inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex  left-[140px] -top-6 rounded-full h-2 w-2 bg-green-500"></span>
            </span>
              </p>
        </div>
        {playingTrack != undefined ? 
          <UserStreamingActivity accessToken={response.access_token} track={playingTrack.item} /> 
        :
        <>
        <div className="flex items-center space-x-4 my-5">
          <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
        </>
  
      } 
        </div>
      </section>
      <Scroller/>
        {/* {!playingTrack  ? "": <Player track={playingTrack.item} progress={playingTrack.progress_ms}/>} */}
    </main>
  );
}
