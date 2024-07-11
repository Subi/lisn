 const client_id  =  process.env.SPOTIFY_CLIENT_ID
 const client_secret = process.env.SPOTIFY_CLIENT_SECRET
 const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
 const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
 const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token"
 const AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize?client_id=e4b02cfac24e48efb4416df25a7a32b2&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-currently-playing"
 const CURRENTLY_PLAYING = "https://api.spotify.com/v1/me/player/currently-playing"



 export {
    client_id,
    client_secret,
    refresh_token,
    basic,
    TOKEN_ENDPOINT,
    CURRENTLY_PLAYING,
    AUTHORIZE_ENDPOINT
 }