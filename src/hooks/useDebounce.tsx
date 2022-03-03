/* eslint-disable @typescript-eslint/no-explicit-any */
const useDebounce = (fn: any, delay: number) => {
  let timeoutId: any = null

  function debouncedFn(...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }

  return debouncedFn
}

export default useDebounce
