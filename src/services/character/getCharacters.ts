import { GetCharactersResponse } from '../../types/characters'
import { api } from '../api'

export const getCharacters = async (
  page: number
): Promise<GetCharactersResponse> => {
  try {
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
  } catch (err: any) {
    throw new Error(err)
  }
}
