import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom";

function LinkButton({ path, title, className }) {
  return (
    <Link to={path}>
      <button className={styles[className]}>{title}</button>
    </Link>
  );
}

export default LinkButton;
