import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./TermOfService.module.css";

export default function TermOfService() {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>{t("legal.terms_of_service.title")}</h2>
      <h4 className={styles.h4}>
        {t("legal.terms_of_service.content.introduction.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.terms_of_service.content.introduction.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.terms_of_service.content.services.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.terms_of_service.content.services.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.terms_of_service.content.user_responsibilities.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.terms_of_service.content.user_responsibilities.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.terms_of_service.content.intellectual_property.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.terms_of_service.content.intellectual_property.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.terms_of_service.content.payments.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.terms_of_service.content.payments.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.terms_of_service.content.warranties.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.terms_of_service.content.warranties.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.terms_of_service.content.liability.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.terms_of_service.content.liability.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.terms_of_service.content.termination.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.terms_of_service.content.termination.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.terms_of_service.content.changes.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.terms_of_service.content.dispute_resolution.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.terms_of_service.content.dispute_resolution.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.terms_of_service.content.changes.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.terms_of_service.content.contact.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.terms_of_service.content.contact.description")}
      </p>
    </main>
  );
}
