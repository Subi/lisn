export type AccessTokenResponse = {
    access_token:string
    token_type:string
}

export interface PlayerResponse {
    timestamp: number
    context : {
        href: string,
        type: string,
        uri: string
    }
    progress_ms: number
    item : Item
}

export type Item = {
    album: Album
    disc_number: number
    duration_ms: number
    explicit: boolean
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    track_numnber: number
    type: string
    uri:string
}

type Album = {
    album_type: string
    href: string
    id: string
    name: string
    release_date:string
    release_date_precision: string
    total_tgracks: number
    type: string
    uri: string
    images: Images[]
    artist: Artist[]
}

type Images = {
    url: string
    height: number
    width: number
}

type Artist = {
    href: string
    id: string
    name: string
    artist: string
    uri: string
}
