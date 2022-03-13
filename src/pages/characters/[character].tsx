import { GetStaticPaths, GetStaticProps } from 'next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { getCharacter } from '../../services/api'
import * as Styles from '../../styles/character'
import Link from 'next/link'
import { CharacterData } from '../../types/characters'
import { CharacterDetail } from '../../components/CharacterDetail/CharacterDetail'

type CharacterProps = {
  character: CharacterData
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
          <CharacterDetail text={`Episodes: ${character.episode.length}`} />
          <CharacterDetail text={`Status: ${character.status}`} />
          <CharacterDetail text={`Species: ${character.species}`} />
          <CharacterDetail text={`Gender: ${character.gender}`} />
          <CharacterDetail text={`Location: ${character.location.name}`} />
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
