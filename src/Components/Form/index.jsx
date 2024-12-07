import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useTranslation } from "react-i18next";

import { useForm } from "@formspree/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export default function Form() {
  const [state, handleSubmit] = useForm("mqakjjqj");
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();


  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  if (state.succeeded && showModal) {
    return (
      <aside className={styles.aside}>
        <h3 className={styles.h3}>{t("contact.form.message.title")}</h3>
        <p className={styles.p}>{t("contact.form.message.description")}</p>
        <div className={styles.aside_div}>
          <p>{t("contact.form.message.message")}</p>
          <FaCheck />
        </div>
      </aside>
    );
  }

  return (
    <section className={styles.contact}>
     <aside className={styles.aside}>
          <h2 className={styles.h2}>{t("contact.title")}</h2>
          <p className={styles.p}>{t("contact.subtitle")}</p>
          <h4 className={styles.h4}>{t("contact.areas")}</h4>
          <p className={styles.p}>
            <FaMapMarkerAlt /> {t("contact.address")}
          </p>
          <p className={styles.p}>
            <FaPhone /> +49 176 82446606
          </p>
          <p className={styles.p}>
            <MdEmail /> info@hm-service.pro
          </p>
        </aside>
    {!showModal && (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.names}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("contact.form.name")}
            className={styles.input}
            required
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder={t("contact.form.lastName")}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.mail}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("contact.form.email")}
            className={styles.input}
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder={t("contact.form.phone")}
            className={styles.input}
          />
        </div>
        <div className={styles.message}>
          <input
            type="text"
            id="address"
            name="address"
            placeholder={t("contact.form.address")}
            className={styles.input}
            required
          />
          <textarea
            id="comment"
            placeholder="Message"
            name={t("contact.form.comment")}
            className={styles.textarea}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
        {t("contact.form.submit")}
        </button>
      </form>
    )}
      </section>
  );
}
