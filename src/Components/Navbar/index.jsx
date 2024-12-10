import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../LanguageSwitcher";

import Logo from "../../assets/LogoNav.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <aside className={styles.aside}>
        <Link className={styles.logo} to="/">
          <img className={styles.logoIcon} src={Logo} alt="HM-Service Logo" />
        </Link>
      </aside>
      {isMobile && (
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <RxHamburgerMenu />
        </button>
      )}
      <ul
        className={`${!isMobile ? styles.desktop : styles.mobile}
        ${isMobile && menuOpen ? styles.open : null}
        `}
      >
        <li className={styles.firstLi}>
          <LanguageSwitcher />
          {isMobile && menuOpen ? (
            <button
              className={styles.close}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <IoClose />
            </button>
          ) : null}
        </li>

        
        <li onClick={toggleMenu}>
          <Link
            className={`${styles.li} ${
              isMobile && menuOpen ? styles.open_li : null
            }`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link
            className={`${styles.li} ${
              isMobile && menuOpen ? styles.open_li : null
            }`}
            to="/about"
          >
            About
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link
            className={`${styles.li} ${
              isMobile && menuOpen ? styles.open_li : null
            }`}
            to="/services"
          >
            Services
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link
            className={`${styles.li} ${
              isMobile && menuOpen ? styles.open_li : null
            }`}
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
