import './side.css';
import About from "./about.js";
import Serv from "./service.js";
import Book from "./booking.js";
import Home from "./Home.js";
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch
} from "react-router-dom";

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div>
      <div className={isSidebarOpen ? "d-none d-lg-block" : ""}>
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
            <div className="navbar-brand d-block d-lg-none"></div>
            <h2>
              <span className="text-primary">TSS </span>Helpdesk
            </h2>
            <ul className="navbar-nav mr-auto py-0">
              <li className="nav-item">
                <Link to="/Home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link">Service</Link>
              </li>
              <li className="nav-item">
                <Link to="/booking" className="nav-link">Booking</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={isSidebarOpen ? "d-block d-lg-none sidebar" : "d-none"}>
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark flex-column align-items-start">
            <div className="navbar-brand d-block d-lg-none"></div>
            <h1 className="m-0 display-5 text-capitalize font-italic text-white">
              <span className="text-primary">TSS</span>Helpdesk
            </h1>
            <ul className="navbar-nav mr-auto py-0 flex-column">
              <li className="nav-item">
                <Link to="/Home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link">Service</Link>
              </li>
              <li className="nav-item">
                <Link to="/booking" className="nav-link">Booking</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ position: "fixed", top: "50%", right: "10px", transform: "translateY(-50%)" }}>
          <button className="btn btn-primary d-lg-none" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </div>
  );
};

const App = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Serv />} />
        <Route path="/booking" element={<Book />} />
      </Routes>
    </div>
  );
};

export default App;
