import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaHome, FaUserCircle } from "react-icons/fa"; // Importing icons from react-icons
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
          <FaHome className="brand-icon" /> {/* Using FontAwesome Home icon */}
          <span className="brand-name">{t("MeuApp")}</span>{" "}
          {/* Use translation */}
        </div>
        <div className="items">
          <div className="item language-selector">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="language-dropdown"
            >
              <option value="en">EN</option>
              <option value="pt">PT</option>
              <option value="es">ES</option>
            </select>
          </div>
          <div className="item avatar" onClick={goToProfile}>
            <FaUserCircle className="avatar-icon" />{" "}
            {/* Using FontAwesome User icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
