import { useParams } from "react-router";
import { useCharacterDetails } from "../../requests/useCharacterDetails";

import CharacterInformation from "../../components/characters/CharacterInformation";

export default function Character() {
  const characterId = useParams<{ characterId: string }>().characterId;

  if (!characterId) {
    return <p>Error: Character ID not found.</p>;
  }

  const { character, isPending, error } = useCharacterDetails(characterId);

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {character && (
        <CharacterInformation key={character.id} character={character} />
      )}
    </div>
  );
}
