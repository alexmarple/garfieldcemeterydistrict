import styles from "./Footer.module.css";
import Signup from "../Signup";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p style={{ fontWeight: "bold", marginRight: "10px" }}>
          Garfield Cemetery District
        </p>
        <p>Serving Whitman County since 1889</p>
      </div>
      <Signup />
    </footer>
  );
};

export default Footer;
