import Input from '../Input'
import * as Styles from './styles'
import { BsSearch } from 'react-icons/bs'
import useDebounce from '../../hooks/useDebounce'

export const Header = () => {
  const handleInput = (text: string) => {
    console.log(text)
  }

  const debouncedFn = useDebounce(handleInput, 2000)

  return (
    <Styles.HeaderWrapper>
      <Styles.ImgHeader />

      <Styles.InputWrapper>
        <Input
          name="input"
          placeholder="Search"
          icon={BsSearch}
          iconColor="#FFF"
          onChange={() => debouncedFn('hello')}
        />
      </Styles.InputWrapper>
    </Styles.HeaderWrapper>
  )
}
