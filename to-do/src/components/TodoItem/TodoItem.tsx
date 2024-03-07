import {
  getAllTodoItems,
  toggleItemCompletion,
} from "../../services/crud-logic";
import styles from "./TodoItem.module.scss";

interface TodoItemProps {
  name: string;
  content: string;
  value: number;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  optionId: number;
  completed: boolean;
  getAllItems: Function;
}

const TodoItem = ({
  name,
  content,
  value,
  handleCheckboxChange,
  optionId,
  completed,
  getAllItems,
}: TodoItemProps) => {
  //onclick p sends out the function that ! completed

  const handleToggleCompletion = async () => {
    try {
      const toggledItem = await toggleItemCompletion(optionId);
      console.log("Toggled item:", toggledItem.completed);
      await getAllItems();
    } catch (error) {
      console.log(error);

      // add toast notification with the error
    }
  };

  const strikethroughIfComplete = {
    textDecoration: completed ? "line-through" : "none",
  };

  return (
    <article className={styles.item}>
      <input
        data-testid={optionId}
        name={name}
        type="radio"
        value={value}
        onChange={handleCheckboxChange}
      />
      <p style={strikethroughIfComplete} onClick={handleToggleCompletion}>
        {content}
      </p>
    </article>
  );
};

export default TodoItem;
