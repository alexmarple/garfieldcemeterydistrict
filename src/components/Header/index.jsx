import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <button
        className={styles.hamburger}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={styles.logoLink}>
        <a href="#">Garfield Cemetery District</a>
      </div>
      <nav
        className={`${styles.links} ${menuOpen ? styles.open : ""}`}
        aria-hidden={!menuOpen}
      >
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
