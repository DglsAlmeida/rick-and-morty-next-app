export interface Location {
  name: string
  url: string
}

export interface Results {
  id: number
  name: string
  status: string
  species: string
  image: string
}

export interface Info {
  pages: number
}

export interface GetCharactersResponse {
  info: Info
  results: Results[]
}

export interface GetCharacterResponse {
  data: {
    id: number
    name: string
    episode: Array<string>
    status: string
    species: string
    image: string
  }
}
