import { Link } from "react-router";
import classes from "./CharacterInformation.module.scss";
import type { Character } from "./types";

type CharacterInformationProps = {
  character: Character;
};

export default function CharacterInformation({
  character,
}: CharacterInformationProps) {
  return (
    <div className={classes.information_card_wrapper}>
      <div className={classes.information_card}>
        <div className={classes.framed_image}>
          <img src={character.image} alt={character.name} />
        </div>
        <ul>
          <li>Name: {character.name}</li>
          <li>Role: {character.role}</li>
          <li>Description: {character.description}</li>
        </ul>
      </div>

      {character.familiar && (
        <div className={classes.information_card}>
          <div className={classes.framed_image}>
            <img
              src={
                character.familiar.image
                  ? character.familiar.image
                  : "/src/assets/images/Jack.jpg"
              }
              alt={character.familiar.name}
            />
          </div>
          <ul>
            <li>Familiar: {character.familiar.name}</li>
            <li>Species: {character.familiar.species}</li>
            <li>Description: {character.familiar.description}</li>
          </ul>
        </div>
      )}
      <Link to={`/character/${character.id}`}>
        <button>Подробнее о {character.name}</button>
      </Link>
    </div>
  );
}
