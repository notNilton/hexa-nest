import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import "primereact/resources/themes/saga-blue/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import "./LoginPage.scss"; // Import the SCSS file

import FooterComp from "../components/FooterComp";

const version = require("../../package.json").version; // Import the version from package.json

const LoginPage = () => {
  const navigate = useNavigate();

  const handleRoleClick = () => {
    navigate("/"); // Redirect to home page after role selection
  };

  return (
    <div className="login-page">
      <div className="content">
        <Card className="card">
          <h2>Login no MAD (Medidor de Armações Digitais)</h2>
          <Divider />
          <div className="button-group">
            <Button
              label="Procurador"
              className="p-button-primary p-button-lg modern-button"
              onClick={handleRoleClick}
            />
            <Button
              label="Corregedor"
              className="p-button-success p-button-lg modern-button"
              onClick={handleRoleClick}
            />
            <Button
              label="Gestor"
              className="p-button-info p-button-lg modern-button"
              onClick={handleRoleClick}
            />
          </div>
          <div className="footer-content">
            <p>Software desenvolvido por Nilton Santos.</p>
            <div className="social-buttons">
              <Button
                icon="pi pi-github"
                className="p-button-rounded p-button-text p-button-plain modern-button"
                onClick={() =>
                  window.open("https://github.com/notNilton", "_blank")
                }
              />
              <Button
                icon="pi pi-linkedin"
                className="p-button-rounded p-button-text p-button-primary modern-button"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/notnilton/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="version">
              <p>Versão do Software: {version}</p>
            </div>
          </div>
        </Card>
      </div>
      <FooterComp />
    </div>
  );
};

export default LoginPage;
