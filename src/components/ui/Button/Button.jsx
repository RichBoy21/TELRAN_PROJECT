import styles from "./Button.module.css";

const Button = ({ className, title }) => {
  return <button className={styles[className]}>{title}</button>;
};

export default Button;
