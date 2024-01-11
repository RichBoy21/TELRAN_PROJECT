import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg'
import styles from './Logo.module.css'

const Logo = () => {
    return <div className={styles.navLogo}>
        <NavLink to="/">
            <img src={logo} alt="Logo" className={styles.imgLogo} />
        </NavLink>
    </div>;
}

export default Logo;