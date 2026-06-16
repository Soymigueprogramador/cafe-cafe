import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant] ?? styles.primary}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
