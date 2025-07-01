import Card from "../../components/shared/Card/Card";
import { useAddCharacter } from "../../hooks/useAddCharacter";
import AddCharacterForm from "./form/AddCharacterForm";
import type { AddCharacterFormData } from "./form/type";

export default function AddCharacter() {
  const { mutate, isPending, error } = useAddCharacter();

  const onSubmit = (data: AddCharacterFormData) => {
    mutate(data, {
      onSuccess: () => {
        console.log("Character added successfully");
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
