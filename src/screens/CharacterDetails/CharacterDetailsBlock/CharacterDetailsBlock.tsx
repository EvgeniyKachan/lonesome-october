import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/Card/Card";
import CharacterDetails from "./CharacterDetails";

type CharacterDetailsBlockProps = {
  isCreator: boolean;
  isPending: boolean;
  isEdit: boolean;
  error: Error | null;
  character: any;
  setIsEdit: (isEdit: boolean) => void;
};

export default function CharacterDetailsBlock({
  isCreator,
  isPending,
  error,
  character,
  setIsEdit,
  isEdit,
}: CharacterDetailsBlockProps) {
  return (
    <Card>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {character && (
        <CharacterDetails key={character.id} character={character} />
      )}
      {isCreator && (
        <Button type="button" onClick={() => setIsEdit(!isEdit)}>
          Edit
        </Button>
      )}
    </Card>
  );
}
