import Card from "../../../components/shared/Card/Card";
import { useCharacterDetails } from "../../../hooks/character/useCharacterDetails";
import { useEditCharacter } from "../../../hooks/character/useEditCharacter";
import AddCharacterForm from "../../AddCharacter/form/AddCharacterForm";
import type { AddCharacterFormData } from "../../AddCharacter/form/type";

type CharacterEditBlock = {
  characterId: string;
  setIsEdit: (isEdit: boolean) => void;
};

const CharacterEditBlock = ({ characterId, setIsEdit }: CharacterEditBlock) => {
  const { mutate, error: errorEdit } = useEditCharacter(characterId);

  const { character, isPending, error } = useCharacterDetails(characterId);
  const onSubmit = (data: AddCharacterFormData) => {
    mutate(data, {
      onSuccess: () => {
        setIsEdit(false);
      },
      onError: (err: Error) => {
        console.error(err.message);
      },
    });
  };

  return (
    <Card>
      {errorEdit && <p>Error: {errorEdit.message}</p>}
      <AddCharacterForm
        onSubmit={onSubmit}
        isLoading={isPending}
        error={error}
        defaultData={character}
      />
    </Card>
  );
};

export default CharacterEditBlock;
