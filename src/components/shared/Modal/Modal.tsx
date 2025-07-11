import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import classes from "./Modal.module.scss";

import Backdrop from "./Backdrop";
import React, { type ReactNode, type FormEvent } from "react";

interface ModalOverlayProps {
  className?: string;
  headerClass?: string;
  header?: ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  contentClass?: string;
  children?: ReactNode;
  footerClass?: string;
  footer?: ReactNode;
}

interface ModalProps extends ModalOverlayProps {
  show: boolean;
  onCancel: () => void;
}

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  const content = (
    <div className={`${classes.modal} ${props.className ?? ""}`}>
      <header className={`${classes.modal__header} ${props.headerClass ?? ""}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div
          className={`${classes.modal__content} ${props.contentClass ?? ""}`}
        >
          {props.children}
        </div>
        <footer
          className={`${classes.modal__footer} ${props.footerClass ?? ""}`}
        >
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-hook") as HTMLElement
  );
};

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
