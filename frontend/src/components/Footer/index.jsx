import styles from "./Footer.module.css";
import Signup from "../Signup";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.detailsBox}>
        <p className={styles.detailsText}>Garfield Cemetery District</p>
        <p>Serving Whitman County since 1889</p>
      </div>
      <Signup />
    </footer>
  );
};

export default Footer;
