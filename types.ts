
export type User = {
    name: string
    email: string
    password: string
    favs: Video[]
    id: string
}

export type Video = {
    title: string
    thumbnail: string
    description: string
    duration: number
    youtubeid: string
    id: string
    date: Date
    fav: boolean
}