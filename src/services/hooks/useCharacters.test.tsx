import { useCharacters } from './useCharacters'
import { renderHook } from '@testing-library/react-hooks'
import { renderWithProviders } from '../../utils/tests/renderWithProviders'
import { api } from '../api'

type WrapperProps = {
  children: React.ReactNode
}

describe('useCharacters', () => {
  it('should request characters from api', async () => {
    const requestData = {
      info: {
        pages: 0
      },
      results: [
        {
          id: 1,
          name: 'Rick',
          status: 'alive',
          species: 'undefined',
          image: 'https://localhost/image'
        }
      ]
    }

    const mockedApi = jest.spyOn(api, 'get').mockResolvedValueOnce({
      data: {
        ...requestData
      }
    })

    const wrapper = ({ children }: WrapperProps) =>
      renderWithProviders(children)

    const { result, waitFor } = renderHook(() => useCharacters(1), { wrapper })

    await waitFor(() => result.current.isSuccess)

    expect(mockedApi).toHaveBeenCalledTimes(1)
    expect(mockedApi).toHaveBeenCalledWith('character', {
      params: {
        page: 1
      }
    })
    expect(result.current.data).toEqual(requestData)
  })
})
