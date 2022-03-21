import { api } from '../api'
import { getCharacters } from './getCharacters'

describe('getCharacters', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should request characters from api correctly', async () => {
    const mockedReturn = {
      info: null,
      results: [
        {
          id: 1,
          name: 'Ricky and Morty',
          episode: ['1'],
          status: 'Alive',
          species: 'undefined',
          image: 'http://localhost:3000/images'
        }
      ]
    }

    const returnedData = {
      data: mockedReturn
    }

    const mockedApi = jest.spyOn(api, 'get').mockResolvedValueOnce({
      ...returnedData
    })

    const data = await getCharacters(1)

    expect(mockedApi).toHaveBeenCalledWith('character', { params: { page: 1 } })
    expect(mockedApi).toHaveBeenCalledTimes(1)
    expect(data).toEqual(mockedReturn)
  })

  test('should return a error', async () => {
    const errorMessage = "There's a error."

    const mockedApi = jest.spyOn(api, 'get').mockRejectedValueOnce(errorMessage)

    await expect(getCharacters(1)).rejects.toThrowError(errorMessage)
    expect(mockedApi).toHaveBeenCalledWith('character', { params: { page: 1 } })
    expect(mockedApi).toHaveBeenCalledTimes(1)
  })
})
