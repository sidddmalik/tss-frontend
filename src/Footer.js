import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-4 col-md-12 mb-5">
            <h1 className="mb-3 display-5 text-capitalize text-white">
              <span className="text-primary">Ticket support system</span>
            </h1>
            <p className="m-0">
            Thank you for reaching out to our support team. Your inquiry is valuable to us. Our dedicated support staff is committed to resolving your concerns promptly. For any further assistance or inquiries, please don't hesitate to contact us. We appreciate your patience and understanding.
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-primary mb-4">Get In Touch</h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>Delhi,India
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+013 345 67890
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>
                  xyz@gmail.com
                </p>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-primary mb-4">Popular Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a
                    className="text-white mb-2"
                    href=""
                  >
                    <i className="fa fa-angle-right mr-2"></i>Our Partners
                  </a>
                  <a
                    className="text-white mb-2"
                    href=""
                  >
                    <i className="fa fa-angle-right mr-2">Need support?</i>
                  </a>
                  <a
                    className="text-white mb-2"
                    href=""
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    appliances
                  </a>
                  <a
                    className="text-white mb-2"
                    href=""
                  >
                    <i className="fa fa-angle-right mr-2"></i> Vet
                  </a>
                  <a
                    className="text-white"
                    href=""
                  >
                    <i className="fa fa-angle-right mr-2"></i>Ayurveda 
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white py-4 px-sm-3 px-md-5"
        style={{ background: "#111111" }}
      >
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy;{" "}
              <a>
                <a className="h">TSS </a>HelpDesk{" "}
              </a>
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
