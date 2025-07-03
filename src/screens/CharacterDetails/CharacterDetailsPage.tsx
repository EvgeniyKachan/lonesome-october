import { useParams } from "react-router";
import { useCharacterDetails } from "../../hooks/useCharacterDetails";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import CharacterDetailsBlock from "./CharacterDetailsBlock/CharacterDetailsBlock";
import CharacterEditBlock from "./CharacterEdit/CharacterEditBlock";

export default function CharacterDetailsPage() {
  const { userId } = useAuth();
  const [isEdit, setIsEdit] = useState(false);
  const { characterId } = useParams();

  if (!characterId) {
    return <p>Error: Character ID not found.</p>;
  }

  const { character, isPending, error } = useCharacterDetails(characterId);
  const isCreator = userId === character?.creator;

  return isEdit && isCreator ? (
    <CharacterEditBlock characterId={characterId} setIsEdit={setIsEdit} />
  ) : (
    <CharacterDetailsBlock
      isCreator={isCreator}
      isPending={isPending}
      isEdit={isEdit}
      error={error}
      character={character}
      setIsEdit={setIsEdit}
    />
  );
}
