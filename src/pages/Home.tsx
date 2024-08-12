import SidebarComp from "../components/SidebarComp";
import NavbarComp from "../components/NavbarComp";
import HomeComp from "../components/HomeComp";
import "./Home.scss";

const Home = () => {
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
    </div>
  );
};

export default Home;
