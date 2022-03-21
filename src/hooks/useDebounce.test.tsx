import { renderHook, act } from '@testing-library/react-hooks'
import useDebounce from './useDebounce'

describe('useDebounce', () => {
  it('should execute hook correctly with params ', async () => {
    jest.useFakeTimers()
    const showText = jest.fn((text: string) => text)

    const { result } = renderHook(() => useDebounce(showText, 500))

    act(() => {
      result.current('hello')
      result.current('hello')
      result.current('hello')
    })

    jest.runAllTimers()

    expect(showText).toHaveBeenCalledTimes(1)
    expect(showText).toHaveBeenCalledWith('hello')
  })
})
