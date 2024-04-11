import React from "react";
import HelpPage from "./help.js";
import SupportPage from "./support.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Head = () => {
  return (
    <header style={{justifycontent:"center"}}>
      <div className="d-inline-flex flex-column text-center w-100">
        <div className="container-fluid">
          <div className="row bg-secondary py-2 px-lg-5">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <span className="text-white">|</span>
                <a className="text-white px-3" href="/help">
                  Help
                </a>
                <span className="text-white">|</span>
                <a className="text-white pl-3" href="/support">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
const Header = () => {
  return (
    <>
      <Head />
      <Routes>
        
        <Route path="/help" element={<HelpPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </>
  );
};
export default Header;
