import React from 'react'
import styles from './Cta.module.css'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

export default function Cta() {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
    <h3 className={styles.h3}>{t("common.cta.text")}</h3>
    <button className={styles.button}><Link className={styles.link} to={t("common.cta.link")}>{t("common.cta.GetInTouch")}</Link></button>
  </main>
  )
}
