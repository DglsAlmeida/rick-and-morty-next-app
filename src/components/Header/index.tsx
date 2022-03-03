import { useCallback } from 'react'
import Input from '../Input'
import * as Styles from './styles'
import { BsSearch } from 'react-icons/bs'

export const Header = () => {
  const handleInput = useCallback((event) => {
    console.log(event.target.value)
  }, [])

  return (
    <Styles.HeaderWrapper>
      <Styles.ImgHeader />

      <Styles.InputWrapper>
        <Input
          name="input"
          placeholder="Search"
          icon={BsSearch}
          iconColor="#FFF"
          onChange={handleInput}
        />
      </Styles.InputWrapper>
    </Styles.HeaderWrapper>
  )
}
