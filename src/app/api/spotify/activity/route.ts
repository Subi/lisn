import { getAccessToken, getCurrentPlayingTrack } from "@/server/spotify";
import { CURRENTLY_PLAYING, TOKEN_ENDPOINT } from "@/server/spotify/constant";
import { StreamingTrackResponse, TokenResponse } from "@/server/spotify/interface";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { headers } from "next/headers";
import { NextRequest , NextResponse } from "next/server";


export async function GET(req:NextRequest , res:NextResponse) {
   
    const accessTokenResponse:TokenResponse =  await getAccessToken();
    
    const response =  await fetch(CURRENTLY_PLAYING , {
        cache: 'no-store',
        headers: {
            'Authorization': `Bearer ${accessTokenResponse.access_token}`
        }
    })
    if(response.status != 200) {
        console.error('Error fetching spotify activity')
        return NextResponse.json({"status" : response.text , "code": response.status})
    }
    const data  =  await response.json()
    return NextResponse.json({status: response.status , track:data })
}

