import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className={styles.footer}>
    <h4 className={styles.h4}>© 2023 Haus Meister Service.</h4>
    <ul className={styles.ul}>
      <li className={styles.link}><Link className={styles.link} to="/privacy-policy">Privacy Policy</Link></li>
      <li className={styles.link}><Link className={styles.link} to="/terms-of-service">Terms of Service</Link></li>
    </ul>
  </footer>
  )
}
