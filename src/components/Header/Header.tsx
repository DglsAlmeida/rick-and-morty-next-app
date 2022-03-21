import * as Styles from './styles'

type HeaderProps = {
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <Styles.HeaderWrapper>
      <Styles.ImgHeader aria-label="img-header" />
      <Styles.InputWrapper>{children}</Styles.InputWrapper>
    </Styles.HeaderWrapper>
  )
}
