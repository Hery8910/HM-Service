import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>{t("legal.privacy_policy.title")}</h2>
      <h4 className={styles.h4}>
        {t("legal.privacy_policy.content.introduction.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.privacy_policy.content.introduction.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.privacy_policy.content.data_collection.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.privacy_policy.content.data_collection.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.privacy_policy.content.legal_basis.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.privacy_policy.content.legal_basis.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.privacy_policy.content.data_usage.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.privacy_policy.content.data_usage.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.privacy_policy.content.data_protection.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.privacy_policy.content.data_protection.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.privacy_policy.content.data_retention.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.privacy_policy.content.data_retention.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.privacy_policy.content.your_rights.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.privacy_policy.content.your_rights.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.privacy_policy.content.third_parties.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.privacy_policy.content.third_parties.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.privacy_policy.content.cookies.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.privacy_policy.content.cookies.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.privacy_policy.content.updates.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.privacy_policy.content.updates.description")}
      </p>
      <h4 className={styles.h4}>
        {t("legal.privacy_policy.content.contact.title")}
      </h4>
      <p className={styles.p}>
        {t("legal.privacy_policy.content.contact.description")}
      </p>
    </main>
  );
}
