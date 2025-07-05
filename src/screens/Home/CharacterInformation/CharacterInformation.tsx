import { Link } from "react-router";
import classes from "./CharacterInformation.module.scss";
import type { CharacterResponse } from "./types";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";

export default function CharacterInformation({ character }: CharacterResponse) {
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
          </div>
        )}
      </div>
      <Link to={`/character/${character.id}`}>
        <Button type="button">Details about {character.characterName}</Button>
      </Link>
    </Card>
  );
}
