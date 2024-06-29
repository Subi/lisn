import Image from "next/image";
import Header from "../components/header";
import Player from "@/components/player";
import { getAccessToken, getCurrentPlayingTrack } from "@/lib/spotify";
import { AccessTokenResponse, PlayerResponse } from "@/types";


export default async function Home() {
  const response:AccessTokenResponse = await getAccessToken()
  const playingTrack:PlayerResponse = await getCurrentPlayingTrack(response.access_token)

  console.log(playingTrack.item.album.images[0].url)
  return (
    <main className="w-full flex-col h-screen">
      <Header/>
      {!playingTrack.item ? "empty": <Player track={playingTrack.item}/>}
    </main>
  );
}
