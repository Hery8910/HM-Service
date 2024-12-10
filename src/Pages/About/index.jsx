import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import Cta from "../../Components/Cta";

export default function About() {
  const { t } = useTranslation();
  const steps = t("about.process.steps", { returnObjects: true });

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.header_h2}>{t("about.title")}</h2>
        <p className={styles.header_p}>{t("about.description")}</p>
      </header>
      <main className={styles.main}>
        <section className={styles.process}>
          <h2 className={styles.h2}>{t("about.process.title")}</h2>
          <p className={styles.process_p}>{t("about.process.description")}</p>
        </section>
        <ul className={styles.ul}>
          {steps.map((step, index) => (
            <li key={index} className={styles.li}>
              <img className={styles.image} src={step.image} alt={step.alt} />
              <div className={styles.div}>
                <h3 className={styles.h3}>{step.title}</h3>
                <p className={styles.li_p}>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <section className={styles.quality}>
          <h2 className={styles.h2}>{t("about.quality.title")}</h2>
          <p className={styles.process_p}>{t("about.quality.description")}</p>
        </section>
      </main>
        <Cta />
    </>
  );
}
