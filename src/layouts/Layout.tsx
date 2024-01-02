import { Outlet } from "react-router-dom";
import "./Layout.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "../shared/components/CustomNavbar";

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Movies Collection</h1>
      </header>
      <CustomNavbar/>
      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2023 Vite React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
