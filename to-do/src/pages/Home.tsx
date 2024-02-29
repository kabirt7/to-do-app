import Button from "../components/Button/Button";
import TodoListContainer from "../containers/TodoListContainer";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home__wrap}>
      <h1>To-Do List</h1>

      <TodoListContainer />
    </div>
  );
};

export default Home;
