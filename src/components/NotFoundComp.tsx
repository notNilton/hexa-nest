import React from "react";
import { useTranslation } from "react-i18next";
import "./NotFoundComp.scss";

const NotFoundComp: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <h1>{t("notFoundTitle")}</h1>
      <p>{t("notFoundMessage")}</p>
    </div>
  );
};

export default NotFoundComp;
