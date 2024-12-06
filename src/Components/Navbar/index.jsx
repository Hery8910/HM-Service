import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-transparent.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Estado para detectar dispositivos móviles
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <Link
        className={`${styles.logo} ${scrolled ? styles.scrolled_li : ""}`}
        to="/"
      >
        <img src={Logo} alt="HM-Service Logo" style={{ height: "80px" }} />
        <h1 className={styles.h1}>HM-Service</h1>
      </Link>
      {isMobile && (
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? "X" : "☰"}
        </button>
      )}
      <ul
        className={`${!isMobile ? styles.desktop : styles.mobile}
                    ${isMobile && menuOpen ? styles.open : ""}
                    ${scrolled ? styles.scrolled_ul : ""}`}
      >
        <li>
          <Link
            className={`${styles.li} ${scrolled ? styles.scrolled_li : ""}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.li} ${scrolled ? styles.scrolled_li : ""}`}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.li} ${scrolled ? styles.scrolled_li : ""}`}
            to="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.li} ${scrolled ? styles.scrolled_li : ""}`}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
