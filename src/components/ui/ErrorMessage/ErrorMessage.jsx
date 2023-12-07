import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message ,className}) => (
  <p  className={styles[className]}>
    {message}
  </p>
);

export default ErrorMessage;