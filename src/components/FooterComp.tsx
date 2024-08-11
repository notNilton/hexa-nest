import React from "react";
import "./FooterComp.scss";
import packageJson from "../../package.json"; // Import the JSON directly

const FooterComp: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Footer text here.</p>
        <p className="version">Versão: {packageJson.version}</p>

        <button
          className="github-button"
          onClick={() => window.open("https://github.com/notNilton", "_blank")}
        >
          GitHub
        </button>
      </div>
    </footer>
  );
};

export default FooterComp;
