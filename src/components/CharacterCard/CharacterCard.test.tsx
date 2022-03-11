import { render, screen } from '@testing-library/react'
import { CharacterCard } from './CharacterCard'
import * as mockPalette from 'react-palette'

jest.mock('react-palette', () => ({
  usePalette: jest.fn(() => ({
    data: {},
    loading: false
  }))
}))

describe('<CharacterCard />', () => {
  it('Should render correctly with props', () => {
    const props = {
      id: 1,
      name: 'John Doe',
      status: 'alive',
      species: 'Rato',
      image: 'https://avatars.githubusercontent.com/u/33066367?v=4'
    }

    render(<CharacterCard {...props} />)

    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
    expect(screen.getByText(/alive/i)).toBeInTheDocument()
    expect(screen.getByText(/rato/i)).toBeInTheDocument()
  })

  it('Should appear loading text when loading is true', () => {
    jest.spyOn(mockPalette, 'usePalette').mockImplementationOnce(() => ({
      data: {},
      loading: true
    }))

    const props = {
      id: 1,
      name: 'John Doe',
      status: 'alive',
      species: 'Rato',
      image: 'https://avatars.githubusercontent.com/u/33066367?v=4'
    }

    render(<CharacterCard {...props} />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
    expect(screen.queryByText(/alive/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/rato/i)).not.toBeInTheDocument()
  })
})
