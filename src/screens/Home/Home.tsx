import CharacterInformation from "../../components/characters/CharacterInformation";
import classes from "./Home.module.scss";
import type { Character } from "../../components/characters/types";
import { useCharacters } from "../../hooks/useCharacters";

export default function Home() {
  const { characters, isLoading, error } = useCharacters();

  return (
    <main className={classes.main}>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {characters.map((character: Character) => (
          <CharacterInformation key={character.id} character={character} />
        ))}
      </div>
    </main>
  );
}
