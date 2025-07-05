import { useState } from "react";
import { useParams } from "react-router";
import CharacterDetailsBlock from "./CharacterDetailsBlock/CharacterDetailsBlock";
import CharacterEditBlock from "./CharacterEdit/CharacterEditBlock";

export default function CharacterDetailsPage() {
  const [isEdit, setIsEdit] = useState(false);
  const { characterId } = useParams();

  if (!characterId) {
    return <p>Error: Character ID not found.</p>;
  }

  return isEdit ? (
    <CharacterEditBlock characterId={characterId} setIsEdit={setIsEdit} />
  ) : (
    <CharacterDetailsBlock
      isEdit={isEdit}
      characterId={characterId}
      setIsEdit={setIsEdit}
    />
  );
}
