import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '.'

describe('<Input />', () => {
  test('input should emit onChange event', () => {
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
