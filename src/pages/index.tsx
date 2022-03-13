/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Header } from '../components/Header/Header'
import * as Styles from '../styles/home'
import { useQuery } from 'react-query'
import { getCharacters } from '../services/api'
import { useCallback, useState } from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import Input from '../components/Input/Input'
import { BsSearch } from 'react-icons/bs'
import { CharacterCard } from '../components/CharacterCard/CharacterCard'

export default function Home() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const { isLoading, data } = useQuery(
    ['characters', page, search],
    () => getCharacters(page, search),
    {
      staleTime: 1000 * 60,
      keepPreviousData: true,
      retry: false
    }
  )

  const handleInput = useCallback((event) => {
    setSearch(event.target.value)
  }, [])

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const nextPage = () => setPage(page + 1)

  if (isLoading) {
    return <p>loading...</p>
  }

  return (
    <Styles.HomeWrapper>
      <Header>
        <Input
          name="input"
          placeholder="Search"
          icon={BsSearch}
          iconColor="#FFF"
          onChange={handleInput}
          debounceDelay={500}
        />
      </Header>

      <Styles.Content>
        <Styles.Title>Rick and Morty</Styles.Title>
        <Styles.Subtitle>
          Rick and Morty Finder book check here the status of your favorite
          character
        </Styles.Subtitle>

        <Styles.CardsContainer>
          {data?.results?.map((data) => (
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
