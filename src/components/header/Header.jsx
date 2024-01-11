import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { navigationItems } from "./configHeader";
import Logo from "./logo/Logo";
import BasketLogo from "./basketLogo/BasketLogo";
import { useState } from "react";
import menu from '../../assets/images/burgerMenu.svg'
import closeBurger from '../../assets/images/closeBurger.svg'


const getColorActive = ({ isActive }) => { return isActive ? `${styles.active} ${styles.link} ` : styles.link };

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <img src={menu} alt="Menu" className={styles.imgMenu} />
        </div>
        <ul className={`${styles.navBar} ${isMenuOpen ? styles.show : ''}`}>
          {isMenuOpen && (
            <span className={styles.closeButton} onClick={closeMenu}><img src={closeBurger} alt="Close" /></span>
          )}
          {navigationItems.map((item, id) => (
            <NavLink key={id} to={item.to} className={getColorActive} onClick={() => setIsMenuOpen(false)}>
              {item.text}
            </NavLink>
          ))}
        </ul>
        <BasketLogo />
      </header>
      <hr className={styles.headerLine} />
    </>
  );
};

export default Header;
