import styles from "./CrudModal.module.scss";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface CrudModalProps {
  submitFunction: SubmitHandler<FieldValues>;
  closeModal: React.MouseEventHandler<HTMLButtonElement>;
}

const CrudModal = ({ submitFunction, closeModal }: CrudModalProps) => {
  const { handleSubmit, control } = useForm();

  return (
    <form
      className={styles.modal__wrap}
      onSubmit={handleSubmit(submitFunction)}
      data-testid="crud-modal"
    >
      <article className={styles.modal__article}>
        <Controller
          name="inputField"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea data-testid="inputField" {...field} minLength={50} />
          )}
          rules={{ maxLength: 50 }}
        />
      </article>

      <footer className={styles.modal__buttonWrap}>
        <button type="submit">Yes</button>
        <button type="button" onClick={closeModal}>
          No
        </button>
      </footer>
    </form>
  );
};

export default CrudModal;
