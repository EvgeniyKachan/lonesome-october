import classes from "./CharacterInformation.module.scss";

export default function CharacterInformation() {
  return (
    <div className={classes.information_card_wrapper}>
      <div className={classes.information_card}>
        <div className={classes.framed_image}>
          <div className="character-card">
            <img src="src\assets\images\Jack.jpg" alt="Jeck" />
            <strong>Джек</strong>
            <p>Открывающий. Участвует в Игре.</p>
          </div>
        </div>
      </div>

      <div className={classes.information_card}>
        <div className={classes.framed_image}>
          <img
            src="src\assets\images\Jack.jpg"
            alt="Jeck"
            className="familiar"
          />
          <strong>Нюх</strong>
          <p>— разумный пёс, следит за магическими артефактами.</p>
        </div>
      </div>
    </div>
  );
}
