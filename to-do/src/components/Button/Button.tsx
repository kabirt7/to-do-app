import styles from "./Button.module.scss";

interface ButtonProps {
  shape: string;
  label: string;
}

const Button = ({ shape, label }: ButtonProps) => {
  const buttonStyle = {
    padding: shape === "square" ? "10px" : "10px 20px",
    borderRadius: shape === "square" ? "5px" : "none",
  };

  return (
    <button style={buttonStyle} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
