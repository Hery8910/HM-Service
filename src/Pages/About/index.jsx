import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.h2}>{t("services.title")}</h2>
        <p className={styles.p}>{t("services.detailed_description")}</p>
      </header>
      <main>
        <h2 className={styles.h2}>{t("services.title")}</h2>
        <p className={styles.p}>{t("services.detailed_description")}</p>
        <section>
          <div>
            <img src="" alt="Floor plan, Construction, Building image." />
            <h3></h3>
            <p></p>
          </div>
          <div>
            <img src="" alt="Construction worker, Builder, Build image." />
            <h3></h3>
            <p></p>
          </div>
          <div>
            <img src="" alt="Bad remodeling finish image." />
            <h3></h3>
            <p></p>
          </div>
        </section>
      </main>
    </>
  );
}
