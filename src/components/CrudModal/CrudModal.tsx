import { useContext } from "react";
import styles from "./CrudModal.module.scss";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { TodoContext } from "../../context/TodoContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface CrudModalProps {
  submitFunction: SubmitHandler<FieldValues>;
  closeModal: React.MouseEventHandler<HTMLButtonElement>;
}

const CrudModal = ({ submitFunction, closeModal }: CrudModalProps) => {
  const { handleSubmit, control } = useForm();
  const { setMessage } = useContext(TodoContext);

  const onSubmit = async (data: FieldValues) => {
    const inputValue = data.inputField as string;

    try {
      if (inputValue.length > 50) {
        throw new Error("input must be less than 50 characters");
      }
      await submitFunction(data);
    } catch (error: any) {
      console.error("Form submission error:", error);
      const errorMessage = error.message || "An error occurred";
      setMessage(errorMessage);
    }
  };

  return (
    <form
      className={styles.modal__wrap}
      onSubmit={handleSubmit(onSubmit)}
      data-testid="crud-modal"
    >
      <article className={styles.modal__article}>
        <Controller
          name="inputField"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea data-testid="inputField" {...field} />
          )}
        />
      </article>

      <footer className={styles.modal__buttonWrap}>
        <button type="submit" data-testid="Yes">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button type="button" onClick={closeModal} data-testid="No">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </footer>
    </form>
  );
};

export default CrudModal;
