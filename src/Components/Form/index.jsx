import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useForm } from "@formspree/react";
import { FaCheck } from "react-icons/fa";

export default function Form() {
  const [state, handleSubmit] = useForm("mqakjjqj");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
      const timer = setTimeout(() => {
        setShowForm(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  if (state.succeeded && showModal) {
    return (
      <aside className={styles.aside}>
        <h3 className={styles.h3}>Thank you for reaching out to us.</h3>
        <p className={styles.p}>We will get back to you as soon as possible.</p>
        <div className={styles.aside_div}>
          <p>Message sent successfully</p>
          <FaCheck />
        </div>
      </aside>
    );
  }

  return (
    !showModal && (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.names}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className={styles.input}
            required
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.mail}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            className={styles.input}
          />
        </div>
        <div className={styles.message}>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            className={styles.input}
            required
          />
          <textarea
            id="comment"
            placeholder="Message"
            name="comment"
            className={styles.textarea}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    )
  );
}
