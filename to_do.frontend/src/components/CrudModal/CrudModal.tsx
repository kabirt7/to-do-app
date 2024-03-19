import { useContext, useState } from "react";
import styles from "./CrudModal.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../../context/TodoContextProvider";

interface CrudModalProps {
  submitFunction: SubmitHandler<{ inputField: string }>;
  closeModal: React.MouseEventHandler<HTMLButtonElement>;
}

const CrudModal = ({ submitFunction, closeModal }: CrudModalProps) => {
  const { handleSubmit } = useForm<{ inputField: string }>();
  const { setMessage } = useContext(TodoContext);

  const [inputValue, setInputValue] = useState("");

  const onSubmit = async () => {
    try {
      if (inputValue.length > 50) {
        throw new Error("Input must be less than 50 characters");
      }
      await submitFunction({ inputField: inputValue });
    } catch (error: any) {
      console.error("Form submission error:", error);
      const errorMessage = error.message || "An error occurred";
      setMessage(errorMessage);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form
      className={styles.modal__wrap}
      onSubmit={handleSubmit(onSubmit)}
      data-testid="crud-modal"
    >
      <article className={styles.modal__article}>
        <textarea
          data-testid="inputField"
          value={inputValue}
          onChange={handleChange}
        />
      </article>

      <footer className={styles.modal__buttonWrap}>
        <button type="submit" data-testid="Yes">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button type="button" onClick={closeModal} data-testid="No">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </footer>
    </form>
  );
};

export default CrudModal;
