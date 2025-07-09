import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

type ErrorModalProps = {
  error: string | null;
};

const ErrorModal = ({ error }: ErrorModalProps) => {
  const [isError, setIsError] = useState(error);
  return (
    <>
      {isError && (
        <Modal
          onCancel={() => {}}
          header="An Error Occurred!"
          show={!!isError}
          footer={
            <Button
              onClick={() => {
                setIsError(null);
              }}
            >
              Okay
            </Button>
          }
        >
          <p>{isError}</p>
        </Modal>
      )}
    </>
  );
};

export default ErrorModal;
