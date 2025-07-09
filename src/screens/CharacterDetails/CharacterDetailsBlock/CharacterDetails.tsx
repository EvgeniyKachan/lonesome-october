import type { CharacterResponse } from "../../Home/CharacterInformation/types";
import classes from "./CharacterDetails.module.scss";

const CharacterDetails = ({ character }: CharacterResponse) => {
  return (
    <div className={classes.information_card_wrapper}>
      <div className={classes.information_card}>
        <div className={classes.framed_image}>
          <img
            src={
              character.characterImage
                ? character.characterImage
                : "/src/assets/images/Jack.jpg"
            }
            alt={character.characterName}
          />
        </div>
        <ul>
          <li>Name: {character.characterName}</li>
          <li>Role: {character.characterRole}</li>
        </ul>
        <p className={classes.description}>{character.characterDescription}</p>
      </div>

      {character.familiar && (
        <div className={classes.information_card}>
          <div className={classes.framed_image}>
            <img
              src={
                character.familiar.familiarImage
                  ? character.familiar.familiarImage
                  : "/src/assets/images/Jack.jpg"
              }
              alt={character.familiar.familiarName}
            />
          </div>
          <ul>
            <li>Familiar: {character.familiar.familiarName}</li>
            <li>Species: {character.familiar.familiarSpecies}</li>
          </ul>
          <p className={classes.description}>
            {character.familiar.familiarDescription}
          </p>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
