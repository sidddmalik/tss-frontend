import React from "react";
import "./service.css"
function Serv() {
  return (
    <div className="container-fluid bg-light pt-5">
      <div className="container py-5">
        <div className="d-flex flex-column text-center mb-5">
          <h4 className="text-secondary mb-3">Our Services</h4>
          <h1 className="display-4 m-0">
            <span className="text-primary">Premium</span>Services
          </h1>
        </div>
        <div className="row pb-3">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-box bg-image-1">
              <h3>Electrical support</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-box bg-image-2">
              <h3>carpentry assistance</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-box bg-image-3">
              <h3>plumbing assistance</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-box bg-image-4">
              <h3>medical assistance</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-box bg-image-5">
              <h3>Technical support</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-box bg-image-6">
              <h3>Mechanical support</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serv;
