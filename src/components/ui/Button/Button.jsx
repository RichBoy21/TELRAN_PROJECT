import styles from "./Button.module.css";

const Button = ({ className, title, onClick ,disabled}) => {
  return (
    <button className={styles[className]} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
