import styles from "./Footer.module.css";
import FooterCards from "./footerCards/FooterCards";

import FooterMap from "./footerMap/FooterMap";

function Footer() {
  return (
    <footer>
      <h2 className={styles.footerTitle}>Contact</h2>
      <FooterCards />
      <FooterMap />
    </footer>
  );
}
export default Footer;
