import SidebarComp from "../components/SidebarComp";
import NavbarComp from "../components/NavbarComp";
import NotFoundComp from "../components/NotFoundComp";
import "./NotFound.scss";

const NotFoundPage = () => {
  return (
    <div className="home">
      <div className="navbar-container">
        <NavbarComp />
      </div>
      <div className="sidebar-container">
        <SidebarComp />
      </div>
      <div className="content-container">
        <NotFoundComp />
      </div>
    </div>
  );
};

export default NotFoundPage;
