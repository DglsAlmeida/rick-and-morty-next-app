import { CharacterCard } from '../components/CharacterCard'
import { Header } from '../components/Header'
import * as Styles from '../styles/home'

export default function Home() {
  return (
    <Styles.HomeWrapper>
      <Header />

      <Styles.Content>
        <Styles.Title>Rick and Morty</Styles.Title>
        <Styles.Subtitle>
          Rick and Morty Finder book check here the status of your favorite
          character
        </Styles.Subtitle>

        <CharacterCard />
      </Styles.Content>
    </Styles.HomeWrapper>
  )
}
