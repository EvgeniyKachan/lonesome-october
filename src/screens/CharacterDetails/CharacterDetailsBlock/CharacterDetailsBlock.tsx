import { useNavigate } from "react-router";
import CharacterDetails from "./CharacterDetails";
import classes from "./CharacterDetails.module.scss";
import { useAuth } from "../../../hooks/auth/useAuth";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";
import { useCharacterDetails } from "../../../hooks/character/useCharacterDetails";
import { useDeleteCharacter } from "../../../hooks/character/useDeleteCharacter";
import LoadingSpinner from "../../../components/shared/LoadingSpinner/LoadingSpinner";

type CharacterDetailsBlockProps = {
  characterId: string;
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
};

const CharacterDetailsBlock = ({
  characterId,
  setIsEdit,
  isEdit,
}: CharacterDetailsBlockProps) => {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const {
    character,
    isPending: isPendingDetails,
    error,
  } = useCharacterDetails(characterId);

  const isCreator = userId === character?.creator;

  const { mutate, isPending } = useDeleteCharacter();

  const onSubmit = () => {
    mutate(characterId, {
      onSuccess: () => {
        navigate("/", { replace: true });
      },
      onError: (err: Error) => {
        console.error(err.message);
      },
    });
  };
  console.log("isPendingDetails", isPendingDetails);
  return (
    <Card>
      {isPendingDetails && <LoadingSpinner />}
      {error && <p>Error: {error.message}</p>}

      {character && (
        <CharacterDetails key={character.id} character={character} />
      )}
      {isCreator && (
        <div className={classes.button_wrapper}>
          <Button type="button" onClick={() => setIsEdit(!isEdit)}>
            Edit
          </Button>
          <Button type="button" onClick={onSubmit}>
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default CharacterDetailsBlock;
