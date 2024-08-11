// MainComp.js
import React from "react";
import "primereact/resources/themes/saga-blue/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import "./MainComp.scss";
import CameraComp from "./CameraComp";
import InputComp from "./InputComp";

const MainComp = () => {
  return (
    <div className="main-container">
      <CameraComp />
      <InputComp />
    </div>
  );
};

export default MainComp;
