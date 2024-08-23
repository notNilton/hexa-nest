import React from "react";
import { FaGithub, FaGlobe, FaTwitter } from "react-icons/fa";
import "./FooterComp.scss";
import packageJson from "../../package.json";

const FooterComp: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="version">Versão: {packageJson.version}</span>

        <button
          className="github-button"
          onClick={() => window.open("https://github.com/notNilton", "_blank")}
          aria-label="GitHub"
        >
          <FaGithub className="github-icon" /> GitHub
        </button>

        <button
          className="website-button"
          onClick={() => window.open("https://yourwebsite.com", "_blank")}
          aria-label="Website"
        >
          <FaGlobe className="website-icon" /> Website
        </button>

        <button
          className="twitter-button"
          onClick={() =>
            window.open("https://twitter.com/yourprofile", "_blank")
          }
          aria-label="Twitter"
        >
          <FaTwitter className="twitter-icon" /> Twitter
        </button>

        <span className="footer-divider">|</span>

        <span className="copyright">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </span>

        <span className="footer-divider">|</span>

        <span className="disclaimer">
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a> |{" "}
          <a href="/contact-us">Contact Us</a>
        </span>

        <span className="footer-divider">|</span>

        <span className="contact-info">
          Email:{" "}
          <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a> |
          Phone: +1234567890
        </span>
      </div>
    </footer>
  );
};

export default FooterComp;
