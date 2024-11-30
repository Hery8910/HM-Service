import React from "react";
import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";

import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>{t("home.welcome_message")}</h1>
        <h2>{t("home.subtitle")}</h2>
        <button>
          {t("common.cta.contact_us")} <IoIosArrowForward />
        </button>
      </section>
      <section className={styles.about}>
        <img src="" alt="" />
        <h2>{t("about.title")}</h2>
        <p>{t("about.description")}</p>
        <button>
          {t("common.cta.learn_more")} <IoIosArrowForward />
        </button>
      </section>
      <section className={styles.testimonials}>
        <h2>{t("home.testimonials.title")}</h2>
        <ul>
          <li>
            <h3>{t("home.testimonials.feedback_1.name")}</h3>
            <p>{t("home.testimonials.feedback_1.feedback")}</p>
          </li>
          <li>
            <h3>{t("home.testimonials.feedback_2.name")}</h3>
            <p>{t("home.testimonials.feedback_2.feedback")}</p>
          </li>
          <li>
            <h3>{t("home.testimonials.feedback_3.name")}</h3>
            <p>{t("home.testimonials.feedback_3.feedback")}</p>
          </li>
          <li>
            <h3>{t("home.testimonials.feedback_4.name")}</h3>
            <p>{t("home.testimonials.feedback_4.feedback")}</p>
          </li>
        </ul>
      </section>
      <section className={styles.services}>
        <h2>{t("services.title")}</h2>
        <ul>
          <li>
            <h3>{t("services.maintenance.name")}</h3>
            <p>{t("services.maintenance.description")}</p>
            <img src="" alt="" />
          </li>
          <li>
            <h3>{t("services.renovations.name")}</h3>
            <p>{t("services.renovations.description")}</p>
            <img src="" alt="" />
          </li>
          <li>
            <h3>{t("services.moving.name")}</h3>
            <p>{t("services.moving.description")}</p>
            <img src="" alt="" />
          </li>
        </ul>
        <h2></h2>
      </section>
      <section className={styles.whyUs}>
        <h2>{t("home.why_us.title")}</h2>
        <ul>
          <li>
            <h4>{t("home.why_us.benefit_1.title")}</h4>
            <p>{t("home.why_us.benefit_1.description")}</p>
          </li>
          <li>
            <h4>{t("home.why_us.benefit_2.title")}</h4>
            <p>{t("home.why_us.benefit_2.description")}</p>
          </li>
          <li>
            <h4>{t("home.why_us.benefit_3.title")}</h4>
            <p>{t("home.why_us.benefit_3.description")}</p>
          </li>
        </ul>
      </section>
      <section className={styles.contact}>
        <aside>
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.subtitle")}</p>
          <h4>{t("contact.areas")}</h4>
          <p>{t("contact.address")}</p>
          <p>{t("contact.phone")}</p>
          <p>{t("contact.email")}</p>
        </aside>
        <form action=""></form>
      </section>
    </main>
  );
}
