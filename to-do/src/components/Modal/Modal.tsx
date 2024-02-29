import styles from "Modal.module.scss";

interface ModalProps {
  children: any;
}

const Modal = ({ children }: ModalProps) => {
  return <div className={styles.modal}>{children}</div>;
};

export default Modal;
