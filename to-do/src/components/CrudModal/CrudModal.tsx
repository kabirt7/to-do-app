import styles from "./CrudModal.module.scss";
import Button from "../Button/Button";
import { Dispatch, SetStateAction, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface CrudModalProps {
  type?: string;
  selectedPost?: number;
  setOpenModal: Dispatch<SetStateAction<string>>;
  submitFunction: SubmitHandler<FieldValues>;
}

// to turn modal on use a state from the parent component
// to differentiate between the two and send the data through, store the set modal as a string

// modal needs to be passed down the id thats being edited from a state, and also the type that it is
// will need to have two different && statements in parent that render depending on the string stored in the openModal state
// default info will be in children in parent

// SO THEY NEED TO BE PASSED DOWN THE SELECTED ID, AND THE SETMODALOPEN STATE

// param that determines whether the note is of the edit or info type
// this then selectively renders custom info on the edit one for exaple

const CrudModal = ({
  type,
  selectedPost = 3,
  setOpenModal,
  submitFunction,
}: CrudModalProps) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className={styles.modal__wrap}
      onSubmit={handleSubmit(submitFunction)}
    >
      <article className={styles.modal__article}>
        <input
          type="text"
          className={styles.modal__article__content}
          {...register("content", { required: true })}
        />
      </article>

      <footer className={styles.modal__buttonWrap}>
        <Button
          shape="rectangle"
          setType="submit"
          click={submitFunction}
          selectedPost={selectedPost}
        >
          Yes
        </Button>
        <Button
          shape="rectangle"
          setType="button"
          click={setOpenModal}
          selectedPost={selectedPost}
        >
          No
        </Button>
      </footer>
    </form>
  );
};

export default CrudModal;
