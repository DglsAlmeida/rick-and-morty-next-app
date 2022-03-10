import { CharacterCard } from '../components/CharacterCard/CharacterCard'
import { Header } from '../components/Header/Header'
import * as Styles from '../styles/home'
import { useQuery } from 'react-query'
import { getCharacters } from '../services/api'
import { useState } from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

export default function Home() {
  const [page, setPage] = useState(1)

  const { isLoading, data } = useQuery(
    ['characters', page],
    () => getCharacters(page),
    {
      staleTime: 1000 * 60
    }
  )

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const nextPage = () => setPage(page + 1)

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Styles.HomeWrapper>
      <Header />

      <Styles.Content>
        <Styles.Title>Rick and Morty</Styles.Title>
        <Styles.Subtitle>
          Rick and Morty Finder book check here the status of your favorite
          character
        </Styles.Subtitle>

        <Styles.CardsContainer>
          {data?.results.map((data) => (
            <CharacterCard
              key={data.id}
              id={data.id}
              name={data.name}
              status={data.status}
              species={data.species}
              image={data.image}
            />
          ))}
        </Styles.CardsContainer>
        <Styles.ButtonContainer>
          <button onClick={previousPage}>
            <AiOutlineArrowLeft size={26} />
          </button>
          <button onClick={nextPage}>
            <AiOutlineArrowRight size={26} />
          </button>
        </Styles.ButtonContainer>
      </Styles.Content>
    </Styles.HomeWrapper>
  )
}
