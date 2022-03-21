import { GetCharacterResponse } from '../../types/characters'
import { api } from '../api'

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
