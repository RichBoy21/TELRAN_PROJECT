import logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/basket.svg";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";



const getColorActive = ({ isActive }) => { return isActive ? `${styles.active} ${styles.link} ` : styles.link };

function Header() {
  const { basketItems } = useSelector(state => state.basket)
  const totalUniqueProducts = basketItems.length;

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
          <div className={styles.counterPosition}>
            <p className={styles.counterHeader}>{totalUniqueProducts}</p>
            <img src={basket} />
          </div>
        </NavLink>
      </header>
      <hr className={styles.headerLine} />
    </>
  );
}
export default Header;
