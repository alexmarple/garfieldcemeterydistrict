import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoLink}>
        <a href="#">Garfield Cemetery District</a>
      </div>
      <nav className={styles.links}>
        <a href="#about">About</a>
        <a href="#directions">Directions</a>
        <a href="#rules">Rules and Regulations</a>
        <a href="#documents">Documents</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
