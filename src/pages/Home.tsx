import React from "react";
import FooterComp from "../components/FooterComp";
import SidebarComp from "../components/SidebarComp";
import NavbarComp from "../components/NavbarComp";
import HomeComp from "../components/HomeComp.tsx";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="navbar-container">
        <NavbarComp />
      </div>
      <div className="sidebar-container">
        <SidebarComp />
      </div>
      <div className="content-container">
        <HomeComp />
      </div>
      <div className="footer-container">
        <FooterComp />
      </div>
    </div>
  );
};

export default Home;
