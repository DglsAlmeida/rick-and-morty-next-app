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
