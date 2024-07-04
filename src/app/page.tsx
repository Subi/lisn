import Image from "next/image";
import Header from "../components/header";
import Player from "@/components/player";
import { getAccessToken, getCurrentPlayingTrack } from "@/server/spotify/index";
import { AccessTokenResponse, PlayerResponse } from "@/types";
import { convertTime } from "@/util/helper";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { StreamingTrackResponse, TokenResponse } from "@/server/spotify/interface";
import UserStreamingActivity from "@/components/activity";


export default async function Home() {
  const response:TokenResponse = await getAccessToken()
  const playingTrack:StreamingTrackResponse = await getCurrentPlayingTrack(response.access_token)


  return (
    <main className="w-full flex-col items-center  justify-center">
      <Header/>
      <section className="text-center w-5/12 mx-auto pt-20">
          <h1 className="text-6xl font-semibold tracking-wide leading-snug">See what songs people are listening too. </h1>
      </section>
        <UserStreamingActivity accessToken={response.access_token} track={playingTrack.item} />
        {/* {!playingTrack  ? "": <Player track={playingTrack.item} progress={playingTrack.progress_ms}/>} */}
    </main>
  );
}
