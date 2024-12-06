import React from "react";
import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";

import { IoIosArrowForward } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";
import Form from "../../Components/Form";

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
          src="./public/images/about-desktop.webp"
          alt="Frames, Nature, Decoration image"
        />
        <div className={styles.about_div}>
          <h2 className={styles.h2}>{t("about.title")}</h2>
          <p className={styles.p}>{t("about.description")}</p>
          <button className={styles.button}>
            {t("common.cta.learn_more")} <IoIosArrowForward />
          </button>
        </div>
      </section>
      <section className={styles.testimonials}>
        <h2 className={styles.h2}>{t("home.testimonials.title")}</h2>
        <ul className={styles.testimonials_ul}>
        {reviews.map((review, index) => (
          <li key={index} className={styles.li}>
            <h3 className={styles.h3}>{review.name}</h3>
            <p className={styles.p}>{review.feedback}</p>
          </li>
        ))}
         
        </ul>
      </section>
      <section className={styles.services}>
        <h2 className={styles.h2}>{t("services.title")}</h2>
        <ul className={styles.services_ul}>
          <li className={`${styles.li} ${styles.services_li}`}>
            <img className={styles.services_img} src="./public/images/furniture-desktop.webp" alt="" />
            <h3 className={styles.h3}>{t("services.maintenance.name")}</h3>
            <p className={styles.p}>{t("services.maintenance.description")}</p>
          </li>
          <li className={`${styles.li} ${styles.services_li}`}>
            <img className={styles.services_img} src="./public/images/move-desktop.webp" alt="" />
            <h3 className={styles.h3}>{t("services.moving.name")}</h3>
            <p className={styles.p}>{t("services.moving.description")}</p>
          </li>
          <li className={`${styles.li} ${styles.services_li}`}>
            <img className={styles.services_img} src="./public/images/handyman-desktop.webp" alt="" />
            <h3 className={styles.h3}>{t("services.renovations.name")}</h3>
            <p className={styles.p}>{t("services.renovations.description")}</p>
          </li>
        </ul>
      </section>
      <section className={styles.whyUs}>
        <h2 className={styles.h2}>{t("home.benefits.title")}</h2>
        <ul className={styles.whyUs_ul}>
          {cards.map((card, index) => (
          <li key={index} className={styles.li}>
            <h3 className={styles.h3}>{card.title}</h3>
            <p className={styles.p}>{card.description}</p>
         </li>
        ))}
        </ul>
      </section>
      <section className={styles.contact}>
        <aside className={styles.aside}>
          <h2 className={styles.h2}>{t("contact.title")}</h2>
          <p className={styles.p}>{t("contact.subtitle")}</p>
          <h3 className={styles.h4}>{t("contact.areas")}</h3>
          <p className={styles.p}><FaMapMarkerAlt /> {t("contact.address")}</p>
          <p className={styles.p}><FaPhone />  +49 176 82446606</p>
          <p className={styles.p}><MdEmail />  info@hm-service.pro</p>
        </aside>
        <Form />
      </section>
    </main>
  );
}
