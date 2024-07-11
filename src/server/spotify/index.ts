import { TokenResponse } from "./interface";
import querystring from 'querystring'
import { TOKEN_ENDPOINT , CURRENTLY_PLAYING , basic , client_id , client_secret , refresh_token } from "./constant"



export const getAccessToken = async ():Promise<TokenResponse> => {
    const response =  await fetch(TOKEN_ENDPOINT , {
        method: "POST",
        cache: 'no-store',
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
    try {
        const response =  await fetch(CURRENTLY_PLAYING,  {
            cache: 'no-store',
            headers : {
                'Authorization': `Bearer ${access_token}`
            }
        })
        if(response.status != 200){
            throw new Error("No track urrently playing")
        } 
        return response.json()
    }  catch(error) { 
        console.log(error)
    }
}


