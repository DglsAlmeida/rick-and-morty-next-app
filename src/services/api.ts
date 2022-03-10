import axios from 'axios'
import {
  GetCharacterResponse,
  GetCharactersResponse
} from '../types/characters'

const BASE_URL = 'https://rickandmortyapi.com/api/'

const api = axios.create({
  baseURL: BASE_URL
})

export const getCharacters = async (
  page: number
): Promise<GetCharactersResponse> => {
  const { data } = await api.get('character', {
    params: {
      page
    }
  })

  const { info, results } = data

  return {
    info,
    results
  }
}

export const getCharacter = async (
  characterId: string
): Promise<GetCharacterResponse> => {
  const { data } = await api.get(`character/${characterId}`)
  return data
}
