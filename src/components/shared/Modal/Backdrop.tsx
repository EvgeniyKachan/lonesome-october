import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";

interface BackdropProps {
  onClick: () => void;
}

const Backdrop = ({ onClick }: BackdropProps) => {
  return createPortal(
    <div className={classes.backdrop} onClick={onClick}></div>,
    document.getElementById("backdrop-hook")!
  );
};

export default Backdrop;
