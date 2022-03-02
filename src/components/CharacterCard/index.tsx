import * as Styles from './styles'
import { usePalette } from 'react-palette'

// type CharacterCardProps = {

// }

export const CharacterCard = () => {
  const { data, loading } = usePalette(
    'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  )

  if (loading) return <div>Loading...</div>

  return (
    <Styles.CardWrapper style={{ backgroundColor: data?.muted }}>
      <Styles.CardDescription>
        <Styles.CharacterID>#1</Styles.CharacterID>
        <Styles.CharacterName>Rick Sanchez</Styles.CharacterName>
        <Styles.CharacterDetails>
          <span>Alive</span>
          <span>Human</span>
        </Styles.CharacterDetails>
      </Styles.CardDescription>

      <Styles.ImgContainer>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
        />
      </Styles.ImgContainer>
    </Styles.CardWrapper>
  )
}
