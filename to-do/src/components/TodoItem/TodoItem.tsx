import styles from "./TodoItem.module.scss";

interface TodoItemProps {
  name: string;
  content: string;
  value: number;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoItem = ({
  name,
  content,
  value,
  handleCheckboxChange,
}: TodoItemProps) => {
  return (
    <article className={styles.item}>
      <input
        name={name}
        type="radio"
        value={value}
        onChange={handleCheckboxChange}
      />
      <p>{content}</p>
    </article>
  );
};

export default TodoItem;
