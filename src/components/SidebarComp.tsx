import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaChartBar, FaUsers, FaSignOutAlt } from "react-icons/fa";
import "./SidebarComp.scss";
import packageJson from "../../package.json";

const SidebarComp: React.FC = () => {
  const navigate = useNavigate();
  const version = packageJson.version;

  const handleNavigation = (path: string) => {
    if (path === "/logout") {
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  const menuItems = [
    { icon: <FaHome />, path: "/" },
    { icon: <FaChartBar />, path: "/dashboard" },
    { icon: <FaUsers />, path: "/usuarios" },
    { icon: <FaSignOutAlt />, path: "/logout" },
  ];

  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleNavigation(item.path)}
              className="menu-item"
            >
              <span className="menu-icon">{item.icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarComp;
