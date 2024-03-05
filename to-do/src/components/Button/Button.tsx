import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
} from "react";
import styles from "./Button.module.scss";
import { SubmitHandler, FieldValues } from "react-hook-form";

interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onClick"
  > {
  shape: string;
  children: any;
  clickFunction: (arg: any) => any;
}

const Button: React.FC<ButtonProps> = ({ shape, children, clickFunction }) => {
  const buttonStyle = {
    padding: shape === "square" ? "10px" : "10px 20px",
    borderRadius: shape === "square" ? "5px" : "none",
  };

  return (
    <button
      style={buttonStyle}
      className={styles.button}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
};

export default Button;
