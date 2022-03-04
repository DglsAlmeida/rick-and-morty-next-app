import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BsSearch } from 'react-icons/bs'
import Input from '.'

describe('<Input />', () => {
  it('should render a icon', () => {
    render(<Input icon={BsSearch} />)
    const svgElement = screen.getByLabelText('icon')
    expect(svgElement).toBeInTheDocument()
  })

  it('should emit onChange event', () => {
    jest.useFakeTimers()
    const onChange = jest.fn()

    render(<Input onChange={onChange} placeholder="Search" />)
    const inputElement = screen.getByPlaceholderText(/search/i)

    userEvent.type(inputElement, 'hello')

    jest.advanceTimersByTime(500)

    expect(inputElement).toHaveValue('hello')
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
