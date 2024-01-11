import styles from "./LinkButton.module.css";
import { NavLink } from "react-router-dom";

function LinkButton({ path, title, className }) {
  return (
    <NavLink to={path} className={styles.linkBtn}>
      <button className={styles[className]}>{title}</button>
    </NavLink>
  );
}

export default LinkButton;
