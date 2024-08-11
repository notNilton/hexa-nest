import React from "react";
import { useNavigate } from "react-router-dom";
import "./SidebarComp.scss";

const SidebarComp: React.FC = () => {
  const navigate = useNavigate();

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
              style={{ cursor: "pointer" }}
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
