import React from "react";
import "./HomeComp.scss";

const HomeComp: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      {/* <button onClick={() => window.history.back()}>Go Back</button> */}
    </div>
  );
};

export default HomeComp;
