import React from "react";
import footerImg from "../../assets/images/footer";
export const Footer = () => {
  return (
    <>
      <section className="bg-dark text-white">
        <div className="container py-5 border-bottom border-dark-subtle">
          <div className="d-flex justify-content-between flex-wrap  row-gap-5">
            <div className="pe-3 pe-md-5">
              <img className="mb-4" src={footerImg.logoFooter} alt="" />
              <div className="d-flex justify-content-start align-items-center mb-2">
                <img
                  className="img-fluid d-block me-2"
                  src={footerImg.location}
                  alt=""
                />
                <p className="m-0 small">
                  25566 Hc 1, Glenallen,
                  <br />
                  Alaska, 99588, USA
                </p>
              </div>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <img
                  className="img-fluid d-block me-2"
                  src={footerImg.call}
                  alt=""
                />
                <p className="m-0 small">+603 4784 273 12</p>
              </div>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <img
                  className="img-fluid d-block me-2"
                  src={footerImg.sms}
                  alt=""
                />
                <p className="m-0 small">rentcars@gmail.com</p>
              </div>
            </div>
            <div className="pe-3 pe-md-5">
              <p className="mb-4">Our Products</p>
              <p className="m-0 small">Career</p>
              <p className="m-0 small">Packages</p>
              <p className="m-0 small">Features</p>
              <p className="m-0 small">Priceline</p>
            </div>
            <div className="pe-3 pe-md-5">
              <p className="mb-4">Resources</p>
              <p className="m-0 small">Download</p>
              <p className="m-0 small">Help Centre</p>
              <p className="m-0 small">Guides</p>
              <p className="m-0 small">Partner Network</p>
              <p className="m-0 small">Cruises</p>
              <p className="m-0 small">Developer</p>
            </div>
            <div className="pe-3 pe-md-5">
              <p className="mb-4">About Rentcars</p>
              <p className="m-0 small">Why choose us</p>
              <p className="m-0 small">Our Story</p>
              <p className="m-0 small">Investor Relations</p>
              <p className="m-0 small">Priceline</p>
            </div>
            <div className="pe-3 pe-md-5">
              <p className="mb-4">Follow Us</p>
              <div className="d-flex gap-2">
                <img src={footerImg.facebook} alt="" />
                <img src={footerImg.instagram} alt="" />
                <img src={footerImg.youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-3">
          <p>Copyright 2024 ・ Rentcars, All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};
export default Footer;
