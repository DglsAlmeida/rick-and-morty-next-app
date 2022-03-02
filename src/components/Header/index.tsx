import Input from '../Input'
import * as Styles from './styles'
import { BsSearch } from 'react-icons/bs'

export const Header = () => {
  return (
    <Styles.HeaderWrapper>
      <Styles.ImgHeader />

      <Styles.InputWrapper>
        <Input
          name="input"
          placeholder="Search"
          icon={BsSearch}
          iconColor="#FFF"
        />
      </Styles.InputWrapper>
    </Styles.HeaderWrapper>
  )
}
