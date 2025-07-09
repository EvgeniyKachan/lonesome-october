import CharacterInformation from "./CharacterInformation/CharacterInformation";
import classes from "./Home.module.scss";
import type { Character } from "./CharacterInformation/types";
import { useCharacters } from "../../hooks/character/useCharacters";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";

const Home = () => {
  const { characters, isLoading, error } = useCharacters();

  return (
    <main className={classes.main}>
      <div>
        {isLoading && <LoadingSpinner />}
        {error && <p>Error: {error.message}</p>}
        {characters.map((character: Character) => (
          <CharacterInformation key={character.id} character={character} />
        ))}
      </div>
    </main>
  );
};

export default Home;
