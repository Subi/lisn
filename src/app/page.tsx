import Image from "next/image";
import Header from "../components/header";
import Player from "@/components/player";
import Link from "next/link";
import { getAccessToken, getCurrentPlayingTrack } from "@/server/spotify/index";
import { AccessTokenResponse, PlayerResponse } from "@/types";
import { convertTime } from "@/util/helper";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { StreamingTrackResponse, TokenResponse } from "@/server/spotify/interface";
import UserStreamingActivity from "@/components/activity";
import { Button } from "@/components/ui/button";


export default async function Home() {
  const response:TokenResponse = await getAccessToken()
  const playingTrack:StreamingTrackResponse = await getCurrentPlayingTrack(response.access_token)


  return (
    <main className="w-full flex-col items-center  justify-center">
      <Header/>
      <section className="w-9/12 mx-auto flex justify-between  py-28">
        <div className="flex-col">
          <h1 className="text-6xl  leading-tight tracking-wide font-bold  pb-24">See what songs people are currently listening too.</h1>
          <Link href="https://form.typeform.com/to/UzO3AdNc">
            <Button variant="default" className="text-lg tracking-wide bg-black text-white font-semibold py-5 px-10 rounded-md hover:bg-black">Get Started </Button>          
          </Link>
        </div>
        <div className="w-4/12 justify-start flex-col mr-10">
        <div className="w-full ">
            <p className=" text-md tracking-wide font-semibold">
              Recent Activity
            <span className="relative flex h-2 w-2 ">
            <span className="animate-ping absolute left-[140px] -top-6 inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex  left-[140px] -top-6 rounded-full h-2 w-2 bg-green-500"></span>
            </span>
              </p>
        </div>
        <UserStreamingActivity accessToken={response.access_token} track={playingTrack.item} />
        </div>
      </section>
        {/* {!playingTrack  ? "": <Player track={playingTrack.item} progress={playingTrack.progress_ms}/>} */}
    </main>
  );
}
