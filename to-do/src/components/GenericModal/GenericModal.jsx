import styles from "./GenericModal.module.scss";

const GenericModal = ({ children }) => {
  return <div className={styles.genericModal}>{children}</div>;
};

export default GenericModal;
