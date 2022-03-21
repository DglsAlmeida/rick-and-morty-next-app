import { api } from '../api'
import { getCharacter } from './getCharacter'
import { getCharacters } from './getCharacters'

describe('getCharacter', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should request characters from api correctly', async () => {
    const characterData = {
      id: 1,
      name: 'Ricky and Morty',
      episode: ['1'],
      status: 'Alive',
      species: 'undefined',
      image: 'http://localhost:3000/images'
    }

    const returnedData = {
      data: characterData
    }

    const mockedApi = jest.spyOn(api, 'get').mockResolvedValueOnce({
      ...returnedData
    })

    const data = await getCharacter('1')

    expect(mockedApi).toHaveBeenCalledWith(`character/1`)
    expect(mockedApi).toHaveBeenCalledTimes(1)
    expect(data).toEqual(characterData)
  })

  test('should return a error', async () => {
    const errorMessage = "There's a error."

    const mockedApi = jest.spyOn(api, 'get').mockRejectedValueOnce(errorMessage)

    await expect(getCharacter('1')).rejects.toThrowError(errorMessage)
    expect(mockedApi).toHaveBeenCalledWith(`character/1`)
    expect(mockedApi).toHaveBeenCalledTimes(1)
  })
})
