import CharacterInformation from "./CharacterInformation";
import classes from "./Home.module.scss";

export default function Home() {
  return (
    <main className={classes.main}>
      <div>
        <CharacterInformation />
        <CharacterInformation />
        <CharacterInformation />
        <CharacterInformation />
        <CharacterInformation />
        <CharacterInformation />
      </div>
    </main>
  );
}
