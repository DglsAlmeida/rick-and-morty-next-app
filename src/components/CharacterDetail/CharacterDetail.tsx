import * as Styles from './styles'

type CharacterDetailProps = {
  text: string
}

export const CharacterDetail = ({ text }: CharacterDetailProps) => {
  return <Styles.DetailText>{text}</Styles.DetailText>
}
