import logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/basket.svg";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { navigationItems } from "./configHeader";



const getColorActive = ({ isActive }) => { return isActive ? `${styles.active} ${styles.link} ` : styles.link };

function Header() {
  const { basketItems } = useSelector(state => state.basket)
  const totalUniqueProducts = basketItems.length;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <ul className={styles.navBar}>
          {navigationItems.map((item, id) => (
            <NavLink key={id} to={item.to} className={getColorActive}>
              {item.text}
            </NavLink>
          ))}
        </ul>
        <NavLink to="/basket" className={styles.basket}>
          <div className={styles.counterPosition}>
            <p className={styles.counterHeader}>{totalUniqueProducts}</p>
            <img src={basket} alt="Basket" />
          </div>
        </NavLink>
      </header>
      <hr className={styles.headerLine} />
    </>
  );
};

export default Header;
