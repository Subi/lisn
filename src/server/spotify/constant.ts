 const client_id  =  process.env.SPOTIFY_CLIENT_ID
 const client_secret = process.env.SPOTIFY_CLIENT_SECRET
 const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
 const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
 const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token"
 const CURRENTLY_PLAYING = "https://api.spotify.com/v1/me/player/currently-playing"



 export {
    client_id,
    client_secret,
    refresh_token,
    basic,
    TOKEN_ENDPOINT,
    CURRENTLY_PLAYING
 }