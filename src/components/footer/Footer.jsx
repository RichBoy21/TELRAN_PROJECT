import styles from "./Footer.module.css";
import FooterCards from "./footerCards/FooterCards";

import FooterMap from "./footerMap/FooterMap";

function Footer() {
  return (
    <div>
      <h2 className={styles.footerTitle}>Contact</h2>
      <FooterCards />
      <FooterMap />
    </div>
  );
}
export default Footer;
