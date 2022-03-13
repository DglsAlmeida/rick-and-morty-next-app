import { render, screen } from '@testing-library/react'
import { CharacterDetail } from './CharacterDetail'

describe('<CharacterDetail />', () => {
  it('Should render correctly with text prop', () => {
    render(<CharacterDetail text="test" />)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
