import React from "react";
import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";

import { IoIosArrowForward } from "react-icons/io";

import { RiDoubleQuotesR } from "react-icons/ri";

import { Link } from "react-router-dom";
import Form from "../../Components/Form";
import ServicesComponent from "../../Components/ServicesComponent";

export default function Home() {
  const { t } = useTranslation();
  const cards = t("home.benefits.cards", { returnObjects: true });
  const reviews = t("home.testimonials.reviews", { returnObjects: true });

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.h1}>{t("home.welcome_message")}</h1>
        <h2 className={styles.h2}>{t("home.subtitle")}</h2>
        <button className={styles.button}>
          <Link className={styles.link} to="/contact">
            {t("common.cta.contact_us")} <IoIosArrowForward />
          </Link>
        </button>
      </section>
      <section className={styles.about}>
        <img
          className={styles.about_img}
          src="/images/about-desktop.webp"
          alt="Frames, Nature, Decoration image"
        />
        <div className={styles.about_div}>
          <h2 className={styles.h2}>{t("about.title")}</h2>
          <p className={styles.p}>{t("about.description")}</p>
          <button className={styles.button}>
          <Link className={styles.link} to="/about">
            {t("common.cta.learn_more")} <IoIosArrowForward />
          </Link>

          </button>
        </div>
      </section>
      <section className={styles.testimonials}>
        <h2 className={styles.h2}>{t("home.testimonials.title")}</h2>
        <ul className={styles.testimonials_ul}>
          {reviews.map((review, index) => (
            <li
              key={index}
              className={`${styles.li} ${styles.testimonials_li}`}
            >
              <RiDoubleQuotesR className={styles.testimonials_icon} />
              <p className={styles.p}>{review.feedback}</p>
              <h3 className={styles.h3}>{review.name}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ServicesComponent />
      </section>
      <section className={styles.whyUs}>
        <h2 className={styles.h2}>{t("home.benefits.title")}</h2>
        <ul className={styles.whyUs_ul}>
          {cards.map((card, index) => (
            <li
              key={index}
              className={`${styles.li} ${styles.testimonials_li}`}
            >
              <h3 className={styles.h3}>{card.title}</h3>
              <p className={styles.p}>{card.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
       
        <Form />
      </section>
    </main>
  );
}
