import Toast from "../components/ToastComponent/ToastComponent";
import TodoListContainer from "../containers/TodoListContainer";
import { TodoContext } from "../context/TodoContextProvider";
import styles from "./Home.module.scss";
import { useContext, useState } from "react";

const Home = () => {
  const { message } = useContext(TodoContext);
  const [openModal, setOpenModal] = useState("none");
  const modalOpenThenBlurBg = {
    filter: openModal != "none" ? "blur(4px)" : "none",
  };
  return (
    <div className={styles.home__wrap}>
      <h1 style={modalOpenThenBlurBg}>To-Do List</h1>

      <TodoListContainer openModal={openModal} setOpenModal={setOpenModal} />

      {message && <Toast message={message} />}
    </div>
  );
};

export default Home;
