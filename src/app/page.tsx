import Image from "next/image";
import Header from "../components/header";
import { getAccessToken, getCurrentPlayingTrack } from "@/lib/spotify";
import { AccessTokenResponse } from "@/types";


export default async function Home() {
  const response:AccessTokenResponse = await getAccessToken()
  const playingTrack = await getCurrentPlayingTrack(response.access_token)
  console.log(playingTrack)



  return (
    <main>
        <Header/>
    </main>
  );
}
