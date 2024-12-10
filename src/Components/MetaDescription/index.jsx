import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const MetaDescription = () => {
  const { t, i18n } = useTranslation();

  return (
    <Helmet>
      <meta name="description" content={t("meta.description")} />
      <html lang={i18n.language} />
    </Helmet>
  );
};

export default MetaDescription;
