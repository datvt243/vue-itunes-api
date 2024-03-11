export interface iItem {
    amgArtistId: number
    artistId: number
    artistName: string
    artistViewUrl: string
    artworkUrl60: string
    artworkUrl100: string
    collectionCensoredName: string
    collectionExplicitness: string
    collectionId: number
    collectionName: string
    collectionPrice: string
    collectionType: string
    collectionViewUrl: string
    contentAdvisoryRating: string
    copyright: string
    country: string
    currency: string
    primaryGenreName: string
    releaseDate: string
    trackCount: string
    wrapperType: string
    trackName?: string
}

export interface iListItem {
    resultCount?: number
    results?: iItem[]
}
