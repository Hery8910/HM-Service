import React from "react";
import { useTranslation } from "react-i18next";
import styles from './LanguageSwitcher.module.css'

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <form >
    <select 
    className={styles.select}
     onChange={changeLanguage} 
     defaultValue={i18n.language}
     aria-label="Language"
     >
      <option value="en">English</option>
      <option value="ar">العربية</option>
      <option value="de">Deutsch</option>
    </select>
    </form>
  );
};