import type { CharacterResponse } from "../../../components/characters/types";
import Card from "../../../components/shared/Card/Card";
import classes from "./CharacterDetails.module.scss";

export default function CharacterDetails({ character }: CharacterResponse) {
  return (
    <Card className={classes.character_information}>
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
          <p>{character.characterDescription}</p>
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
            <p>{character.familiar.familiarDescription}</p>
          </div>
        )}
      </div>
    </Card>
  );
}
