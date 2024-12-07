import React from 'react'
import styles from './Services.module.css'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


export default function ServicesComponent() {
  const { t } = useTranslation();

  return (
    <main className={styles.services}>
       <h2 className={styles.h2}>{t("services.title")}</h2>
       <p className={styles.description_p}>{t("services.description")}</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <img
              className={styles.img}
              src="/images/furniture-desktop.webp"
              alt="Furniture, Table, Chairs image"
            />
            <h3 className={styles.h3}>{t("services.maintenance.name")}</h3>
            <p className={styles.p}>{t("services.maintenance.description")}</p>
            <button className={styles.button}><Link className={styles.link} to="/services">{t("services.button")}</Link></button>
          </li>
          <li className={styles.li}>
            <img
              className={styles.img}
              src="/images/move-desktop.webp"
              alt="Move, Key, New apartment image"
            />
            <h3 className={styles.h3}>{t("services.moving.name")}</h3>
            <p className={styles.p}>{t("services.moving.description")}</p>
            <button className={styles.button}><Link className={styles.link} to="/services">{t("services.button")}</Link></button>
          </li>
          <li className={styles.li}>
            <img
              className={styles.img}
              src="/images/handyman-desktop.webp"
              alt="Handyman, Furniture assembly, Drill image"
            />
            <h3 className={styles.h3}>{t("services.renovations.name")}</h3>
            <p className={styles.p}>{t("services.renovations.description")}</p>
            <button className={styles.button}><Link className={styles.link} to="/services">{t("services.button")}</Link></button>
          </li>
        </ul> 
    </main>
  )
}