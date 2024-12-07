import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ServicesPage.module.css";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <picture>
          <source
            className={styles.img_header}
            srcSet="/images/Service-desktop.webp"
            media="(min-width: 768px)"
          />
          <img
            className={styles.img_header}
            src="/images/Service-mobile.webp"
            alt="Blinds, Hands, cleaning image"
          />
        </picture>
        <div className={styles.header_div}>
          <h2 className={styles.h2}>{t("services.title")}</h2>
          <p className={styles.p}>{t("services.detailed_description")}</p>
        </div>
      </header>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <picture>
            <source
              className={styles.img}
              srcSet="/images/furniture-desktop.webp"
              media="(min-width: 768px)"
            />
            <img
              className={styles.img}
              src="/images/furniture-mobile.webp"
              alt="Furniture, Table, Chairs image"
            />
          </picture>
          <div className={styles.li_div}>
            <h3 className={styles.h3}>{t("services.maintenance.name")}</h3>
            <p className={styles.p}>
              {t("services.maintenance.detailed_description")}
            </p>
          </div>
        </li>
        <li className={styles.li}>
          <picture>
            <source
              className={styles.img}
              srcSet="/images/move-desktop.webp"
              media="(min-width: 768px)"
            />
            <img
              className={styles.img}
              src="/images/move-mobile.webp"
              alt="Move, Key, New apartment image"
            />
          </picture>
          <div className={styles.li_div}>
            <h3 className={styles.h3}>{t("services.moving.name")}</h3>
            <p className={styles.p}>
              {t("services.moving.detailed_description")}
            </p>
          </div>
        </li>
        <li className={styles.li}>
          <picture>
            <source
              className={styles.img}
              srcSet="/images/handyman-desktop.webp"
              media="(min-width: 768px)"
            />
            <img
              className={styles.img}
              src="/images/handyman-mobile.webp"
              alt="Handyman, Furniture assembly, Drill image"
            />
          </picture>
          <div className={styles.li_div}>
            <h3 className={styles.h3}>{t("services.renovations.name")}</h3>
            <p className={styles.p}>
              {t("services.renovations.detailed_description")}
            </p>
          </div>
        </li>
      </ul>
      <aside className={styles.aside}>
        <h3 className={styles.h3}>{t("services.cta")}</h3>
        <button className={styles.button}><Link className={styles.link} to="/contact">{t("services.ctaButton")}</Link></button>
      </aside>
    </main>
  );
}
