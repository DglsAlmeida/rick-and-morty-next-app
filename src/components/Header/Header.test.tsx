import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from '.'

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />)
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
  })
})