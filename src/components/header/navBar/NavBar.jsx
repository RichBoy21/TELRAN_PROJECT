import { Fragment, useState } from "react";
import menu from '../../../assets/images/burgerMenu.svg'
import closeBurger from '../../../assets/images/closeBurger.svg'
import { NavLink } from "react-router-dom";
import { navigationItems } from ".././configHeader";
import styles from ".././Header.module.css";

const getColorActive = ({ isActive }) => { return isActive ? `${styles.active} ${styles.link} ` : styles.link };

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return <Fragment>
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
    </Fragment>;
}

export default NavBar;