import { useNavigate } from "react-router";
import Card from "../../components/shared/Card/Card";
import { useAddCharacter } from "../../hooks/character/useAddCharacter";
import AddCharacterForm from "./form/AddCharacterForm";
import type { AddCharacterFormData } from "./form/type";
import type { CharacterResponse } from "../Home/CharacterInformation/types";

export default function AddCharacter() {
  const { mutate, isPending, error } = useAddCharacter();
  const navigate = useNavigate();

  const onSubmit = (data: AddCharacterFormData) => {
    mutate(data, {
      onSuccess: (response: CharacterResponse) => {
        navigate(`/character/${response.character.id}`, { replace: true });
      },
      onError: (err: Error) => {
        console.error(err.message);
      },
    });
  };

  return (
    <Card>
      <AddCharacterForm
        onSubmit={onSubmit}
        isLoading={isPending}
        error={error}
      />
    </Card>
  );
}
