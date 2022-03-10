import { GetStaticPaths, GetStaticProps } from 'next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { getCharacter } from '../../services/api'
import * as Styles from '../../styles/character'
import Link from 'next/link'
import { Location } from '../../types/characters'
import { useRouter } from 'next/router'

type Character = {
  name: string
  gender: string
  episode: Array<number>
  image: string
  status: string
  species: string
  location: Location
}

type CharacterProps = {
  character: Character
}

const Character = ({ character }: CharacterProps) => {
  return (
    <Styles.CharacterWrapper>
      <Styles.CharacterImgBackground />

      <Link href="/">
        <a>
          <AiOutlineArrowLeft size={26} color="#fff" />
        </a>
      </Link>

      <Styles.CharacterContent>
        <img src={character.image} alt={character.name} />

        <Styles.Name>{character.name}</Styles.Name>

        <Styles.CharacterDetails>
          <Styles.DetailsItem>
            Episodes: {character.episode.length}
          </Styles.DetailsItem>
          <Styles.DetailsItem>Status: {character.status}</Styles.DetailsItem>
          <Styles.DetailsItem>Species: {character.species}</Styles.DetailsItem>
          <Styles.DetailsItem>Gender: {character.gender}</Styles.DetailsItem>
          <Styles.DetailsItem>
            Location: {character.location.name}
          </Styles.DetailsItem>
        </Styles.CharacterDetails>
      </Styles.CharacterContent>
    </Styles.CharacterWrapper>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { character } = ctx.params

  const data = await getCharacter(character)

  return {
    props: {
      character: data
    },
    revalidate: 60 * 60 * 24
  }
}

export default Character
