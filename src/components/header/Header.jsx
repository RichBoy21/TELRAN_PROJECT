import logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/basket.svg";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";



const getColorActive = ({ isActive }) => { return isActive ? `${styles.active} ${styles.link} ` : styles.link };

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <NavLink to="/" >
            <img src={logo} />
          </NavLink>
        </div>
        <ul className={styles.navBar}>
          <NavLink to="/" className={getColorActive}>
            Main Page
          </NavLink>
          <NavLink to="/categories" className={getColorActive}>
            Categories
          </NavLink>
          <NavLink to="/products" className={getColorActive}>
            All products
          </NavLink>
          <NavLink to="/sales" className={getColorActive}>
            All sales
          </NavLink>
        </ul>
        <NavLink to='/basket' className={styles.basket}>
          <img src={basket} />
        </NavLink>
      </header>
      <hr />
    </>
  );
}
export default Header;
