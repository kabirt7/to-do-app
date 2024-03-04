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
    "onClick" | "type"
  > {
  shape: string;
  children: any;
  setType?: "button" | "submit" | "reset";
  click?: (arg: any) => void;
  selectedPost?: number | undefined;
}

const Button: React.FC<ButtonProps> = ({
  shape,
  children,
  setType = "button",
  click,
  selectedPost,
}) => {
  const buttonStyle = {
    padding: shape === "square" ? "10px" : "10px 20px",
    borderRadius: shape === "square" ? "5px" : "none",
  };

  return (
    <button
      style={buttonStyle}
      className={styles.button}
      type={setType}
      onClick={() => click && selectedPost !== undefined && click(selectedPost)}
    >
      {children}
    </button>
  );
};

export default Button;
