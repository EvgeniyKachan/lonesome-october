import classes from "./CharacterInformation.module.scss";

export default function CharacterInformation() {
  return (
    <div className={classes.information_card_wrapper}>
      <div className={classes.information_card}>
        <div className={classes.framed_image}>
          <img src="src\assets\images\Jack.jpg" alt="Jeck" />
        </div>
      </div>

      <div className={classes.information_card}>
        <div className={classes.framed_image}>
          <img src="src\assets\images\Jack.jpg" alt="Jeck" />
        </div>
      </div>
    </div>
  );
}
