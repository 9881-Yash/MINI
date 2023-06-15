import React from "react";

export const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-white text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          {/* <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div> */}
          {/* Left */}
          {/* Right */}
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary" />
                  BlueStone
                </h6>
                <p>
                  BlueStone Jewellers always appreciated by its valuable and loyal
                  customers and is recognized in overseas exhibitions.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Gold
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Diamond
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Polki 
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Baby Collection
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Account
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary" /> Mumbai, Maharashtra
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary" /> +91 8830711743
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary" /> +91 8830711744
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
        >
          © 2021 Copyright: BlueStone
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};
