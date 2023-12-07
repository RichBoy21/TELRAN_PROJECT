import styles from "./Button.module.css";

const Button = ({ className, title, onClick }) => {
  return (
    <button className={styles[className]} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
