import styles from "./FooterMap.module.css";

function FooterMap() {
  return (
    <iframe
      className={styles.footerMap}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510.50899197891505!2d13.375319817128796!3d52.508032797832186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sgr!4v1700724981306!5m2!1sru!2sgr"
      title="tel-run"
    ></iframe>
  );
}

export default FooterMap;
