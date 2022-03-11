import * as Styles from './styles'
import { usePalette } from 'react-palette'
import Link from 'next/link'
import { CharacterDetail } from '../CharacterDetail/CharacterDetail'

type CharacterCardProps = {
  id: number
  name: string
  status: string
  species: string
  image: string
}

export const CharacterCard = ({
  id,
  name,
  status,
  species,
  image
}: CharacterCardProps) => {
  const { data, loading } = usePalette(image)

  if (loading) return <div>Loading...</div>

  return (
    <Link href={`characters/${id}`}>
      <Styles.CardWrapper style={{ backgroundColor: data?.muted }}>
        <Styles.CardDescription>
          <Styles.CharacterID>#{id}</Styles.CharacterID>
          <Styles.CharacterName>{name}</Styles.CharacterName>
          <Styles.CharacterDetails>
            <CharacterDetail text={`${status}`} />
            <CharacterDetail text={`${species}`} />
          </Styles.CharacterDetails>
        </Styles.CardDescription>

        <Styles.ImgContainer>
          <img src={image} alt={name} />
        </Styles.ImgContainer>
      </Styles.CardWrapper>
    </Link>
  )
}
