import styles from "./Header.module.css";
import Logo from "./logo/Logo";
import BasketLogo from "./basketLogo/BasketLogo";
import { Fragment } from "react";
import NavBar from "./navBar/NavBar";


function Header() {

 
  return (
    <Fragment>
      <header className={styles.header}>
        <Logo />
        <NavBar />
        <BasketLogo />
      </header>
      <hr className={styles.headerLine} />
    </Fragment>
  );
};

export default Header;
