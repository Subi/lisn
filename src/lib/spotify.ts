import { AccessTokenResponse } from '@/types'
import querystring from 'querystring'
import { cache } from 'react'

const client_id  =  process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token"


export const getAccessToken = async ():Promise<AccessTokenResponse> => {
    
    const response =  await fetch(TOKEN_ENDPOINT , {
        method: "POST",
        headers: {
            'Authorization' : `Basic ${basic}`,
            'Content-Type': "application/x-www-form-urlencoded"
        },
        body : querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        })
    })
    
    return response.json()
}


export const getCurrentPlayingTrack =  async (access_token:string) => {
    const response =  await fetch('https://api.spotify.com/v1/me/player/currently-playing',  {
        cache: 'no-store',
        headers : {
            'Authorization': `Bearer ${access_token}`
        }
    }) 

    return response.json()
}