import logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/basket.svg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.link}>
          <img src={logo} />
        </Link>
      </div>
      <ul className={styles.navBar}>
        <Link to="/" className={styles.link}>
          Main Page
        </Link>
        <Link to="/categories" className={styles.link}>
          Categories
        </Link>
        <Link to="/products" className={styles.link}>
          All products
        </Link>
        <Link to="/sales" className={styles.link}>
          All sales
        </Link>
      </ul>
      <div className={styles.basket}>
        <img src={basket} />
      </div>
    </header>
  );
}
export default Header;
