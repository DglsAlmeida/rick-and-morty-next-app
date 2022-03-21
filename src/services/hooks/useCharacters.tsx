import { useQuery } from 'react-query'
import { getCharacters } from '../character/getCharacters'

export const useCharacters = (page: number) => {
  return useQuery(['characters', page], () => getCharacters(page), {
    staleTime: 1000 * 60,
    keepPreviousData: true,
    retry: false
  })
}
