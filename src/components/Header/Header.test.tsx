import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />)
    expect(screen.getByLabelText(/img-header/i)).toBeInTheDocument()
  })
})
