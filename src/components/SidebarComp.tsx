import React from "react";
import { useNavigate } from "react-router-dom";
import "./SidebarComp.scss";
import packageJson from "../../package.json"; // Importação de JSON

const SidebarComp: React.FC = () => {
  const navigate = useNavigate();
  const version = packageJson.version; // Acesse a versão

  const handleNavigation = (path: string) => {
    if (path === "/logout") {
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  const menuItems = [
    { icon: "🏠", path: "/" }, // Home icon
    { icon: "📊", path: "/dashboard" }, // Dashboard icon
    { icon: "👥", path: "/usuarios" }, // Users icon
    { icon: "🚪", path: "/logout" }, // Logout icon
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
          <li className="menu-item version-item">
            <span className="version-icon" title={`Version ${version}.`}>
              V
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarComp;
