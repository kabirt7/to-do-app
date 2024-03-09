import React, { useEffect, useContext } from "react";
import styles from "./ToastComponent.module.scss";
import { TodoContext } from "../../context/TodoContextProvider";

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { setMessage } = useContext(TodoContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage(null);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.toast}>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
