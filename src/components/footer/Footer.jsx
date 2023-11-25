import styles from "./Footer.module.css";
import instagram from "../../assets/images/instagram.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import FooterMap from "./footerMap/FooterMap";

function Footer() {
  return (
    <div>
      <h2 className={styles.footerTitle}>Contact</h2>
      <div className={styles.footerContainer}>
        <div className={styles.footerPhone}>
          <span>Phone</span>
          <p>+49 999 999 99 99</p>
        </div>
        <div className={styles.footerAddress}>
          <span>Address</span>
          <p>
            Linkstraße 2, 8 OG, 10 785, Berlin,
            <br /> Deutschland
          </p>
        </div>
        <div className={styles.footerSocials}>
          <span>Socials</span>
          <div className={styles.footerImg}>
            <a>
              <img src={instagram} />
            </a>
            <a>
              <img src={whatsapp} />
            </a>
          </div>
        </div>
        <div className={styles.footerWorkingHours}>
          <span>Working Hours</span>
          <p>24 hours a day</p>
        </div>
      </div>
      <FooterMap />
    </div>
  );
}
export default Footer;
