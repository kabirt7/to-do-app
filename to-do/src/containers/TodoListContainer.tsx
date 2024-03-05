import { MouseEventHandler, useEffect, useState } from "react";
import Button from "../components/Button/Button";
import TodoItem from "../components/TodoItem/TodoItem";
import styles from "./TodoListContainer.module.scss";
import { getAllTodoItems } from "../services/crud-logic";
import { TodoItemInterface } from "../services/interfaces";
import CrudModal from "../components/CrudModal/CrudModal";

const TodoListContainer = () => {
  // declare state where we will store the to do items, init it as null
  // declare state for showing the edit modal
  // useEffect to get all the to do items
  // add a function for ADD, DELETE Button onClick
  // if Edit is clicked showModalstate to true
  // add the edit function here and pass it into modal Button via children

  // eventually add toast notifications for adding, deleting etc
  const [todoItems, setTodoItems] = useState<TodoItemInterface[] | null>(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [openModal, setOpenModal] = useState("none");

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const openAddModal = () => {
    setOpenModal("add");
  };

  const openEditModal = () => {
    setOpenModal("edit");
  };

  const closeModal: MouseEventHandler<HTMLButtonElement> = () => {
    setOpenModal("none");
  };

  const addItem = async () => {
    console.log("heloo");
  };

  const editItem = async () => {
    console.log("heloo");
  };

  const deleteItem = async () => {
    console.log("heloo");
  };

  // const delete Item
  // edit item functionality, causes modal to appear that is editable

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTodoItems();
        setTodoItems(data);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__upperButtons}>
          <Button shape="rectangle" clickFunction={openAddModal}>
            ADD
          </Button>
          <Button shape="rectangle" clickFunction={openAddModal}>
            SORT
          </Button>
        </section>
        <section className={styles.container__main}>
          <TodoItem
            name={"options"}
            content={"Please add your first To-Do !"}
            value={0}
            handleCheckboxChange={handleCheckboxChange}
          ></TodoItem>
          {todoItems &&
            todoItems.map((item) => (
              <TodoItem
                key={item.id}
                name={"options"}
                content={item.content}
                value={item.id}
                handleCheckboxChange={handleCheckboxChange}
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
      {/* if showModalisClicked then render Modal */}
      {openModal == "edit" && (
        <CrudModal submitFunction={addItem} closeModal={closeModal} />
      )}
    </>
  );
};

export default TodoListContainer;
