import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavbarComp.scss";

const NavbarComp: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // Add useTranslation hook
  const [language, setLanguage] = useState(i18n.language);

  const goToHome = () => {
    navigate("/");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage); // Change the language of the app
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="brand" onClick={goToHome}>
          <span className="brand-icon">🏠</span>
          <span className="brand-name">{t("myApp")}</span>{" "}
          {/* Use translation */}
        </div>
        <div className="items">
          <div className="item" onClick={goToHome}>
            {t("home")} {/* Use translation */}
          </div>
          <div className="item" onClick={goToProfile}>
            {t("profile")} {/* Use translation */}
          </div>
          <div className="item language-selector">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="language-dropdown"
            >
              <option value="en">EN</option>{" "}
              {/* Note that the values should match the language codes in i18n */}
              <option value="pt">PT</option>
              <option value="es">ES</option>
            </select>
          </div>
          <div className="item avatar" onClick={goToProfile}>
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="avatar-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
