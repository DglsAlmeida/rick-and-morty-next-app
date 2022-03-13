import { useCallback } from 'react'
import Input from '../Input/Input'
import * as Styles from './styles'

type HeaderProps = {
  children: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <Styles.HeaderWrapper>
      <Styles.ImgHeader />
      <Styles.InputWrapper>{children}</Styles.InputWrapper>
    </Styles.HeaderWrapper>
  )
}
