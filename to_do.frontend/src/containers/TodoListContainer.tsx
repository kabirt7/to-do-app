import { MouseEventHandler, useContext, useEffect, useState } from "react";
import Button from "../components/Button/Button";
import TodoItem from "../components/TodoItem/TodoItem";
import styles from "./TodoListContainer.module.scss";
import {
  addTodoItem,
  deleteTodoItem,
  editTodoItem,
  getAllTodoItems,
} from "../services/crud-logic";
import { TodoItemInterface } from "../services/interfaces";
import CrudModal from "../components/CrudModal/CrudModal";
import { TodoContext } from "../context/TodoContextProvider";

interface TodoListContainerProps {
  openModal: string;
  setOpenModal: React.Dispatch<React.SetStateAction<string>>;
}

const TodoListContainer = ({
  openModal,
  setOpenModal,
}: TodoListContainerProps) => {
  const [todoItems, setTodoItems] = useState<TodoItemInterface[] | null>(null);
  const [selectedOption, setSelectedOption] = useState<number>(-1);
  const { setMessage } = useContext(TodoContext);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSelectedOption(value);
  };

  const getAllItems = async () => {
    const items = await getAllTodoItems();
    setTodoItems(items);
  };

  const openAddModal = () => {
    setOpenModal("add");
  };

  const openEditModal = () => {
    if (selectedOption != -1) {
      setOpenModal("edit");
    } else {
      setMessage("Please Select Item");
    }
  };

  const closeModal: MouseEventHandler<HTMLButtonElement> = () => {
    setOpenModal("none");
  };

  const addItem = async (data: any) => {
    try {
      const addedItem = await addTodoItem(data.inputField);
      await getAllItems();
      if (addedItem) {
        setOpenModal("none");
      }
      console.log("Added item:", addedItem);
      setMessage("Added Item Successfully");
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.message || "An error occurred";
      setMessage(errorMessage);
    }
  };

  const editItem = async (data: any) => {
    try {
      const editedItem = await editTodoItem(selectedOption, data.inputField);
      await getAllItems();
      if (editedItem) {
        setOpenModal("none");
      }
      console.log("Edited item:", editedItem);
      setMessage("Edited Item Successfully");
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.message || "An error occurred";
      setMessage(errorMessage);
    }
  };

  const deleteItem = async () => {
    if (selectedOption === -1) {
      setMessage("Please Select Item");
      return;
    } else {
      try {
        await deleteTodoItem(selectedOption);
        await getAllItems();
        setMessage("Deleted Item Successfully");
      } catch (error: any) {
        console.log(error);
        const errorMessage = error.message || "An error occurred";
        setMessage(errorMessage);
      }
    }
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAllItems();
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const modalOpenThenBlurBg = {
    filter: openModal != "none" ? "blur(4px)" : "none",
  };

  return (
    <main data-testid="todo-list-container">
      <div className={styles.container} style={modalOpenThenBlurBg}>
        <section className={styles.container__upperButtons}>
          <Button shape="rectangle" clickFunction={openAddModal}>
            ADD
          </Button>
          {/* <Button shape="rectangle" clickFunction={openAddModal}>
            SORT
          </Button> */}
        </section>
        <section className={styles.container__main}>
          {todoItems &&
            todoItems.map((item) => (
              <TodoItem
                key={item.id}
                name={"options"}
                content={item.content}
                value={item.id}
                optionId={item.id}
                handleCheckboxChange={handleCheckboxChange}
                completed={item.completed}
                getAllItems={getAllItems}
              />
            ))}
        </section>
        <section className={styles.container__lowerButtons}>
          <Button shape="rectangle" clickFunction={openEditModal}>
            EDIT
          </Button>
          <Button shape="rectangle" clickFunction={deleteItem}>
            DELETE
          </Button>
        </section>
      </div>
      {openModal == "add" && (
        <CrudModal submitFunction={addItem} closeModal={closeModal} />
      )}
      {selectedOption != -1 && openModal == "edit" && (
        <CrudModal submitFunction={editItem} closeModal={closeModal} />
      )}
    </main>
  );
};

export default TodoListContainer;
