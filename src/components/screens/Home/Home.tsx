import CharacterInformation from "../../characters/CharacterInformation";
import classes from "./Home.module.scss";
import type { Character } from "../../characters/types";
import { useCharacters } from "../../../requests/useCharacters";

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
