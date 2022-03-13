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
  page: number,
  name?: string
): Promise<GetCharactersResponse> => {
  try {
    const { data } = await api.get('character', {
      params: {
        page,
        name: name || ''
      }
    })

    const { info, results } = data

    return {
      info,
      results
    }
  } catch (err: any) {
    throw new Error(err)
  }
}

export const getCharacter = async (
  characterId: string
): Promise<GetCharacterResponse> => {
  try {
    const { data } = await api.get(`character/${characterId}`)
    return data
  } catch (err: any) {
    throw new Error(err)
  }
}
