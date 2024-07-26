import React from "react";
import andriod from "../../assets/images/landing-page/andriod.png";
import ios from "../../assets/images/landing-page/ios.png";
import iPhone14 from "../../assets/images/landing-page/iPhone-14.png";
const ContactUS = () => {
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <h5 className="h2">
                Download Rentcars App for{" "}
                <span className="text-primary">FREE</span>
              </h5>
              <p>For faster, easier booking and exclusive deals.</p>
              <div className="d-flex">
                <a href="#" className="p-2">
                  <img src={andriod} alt="" />
                </a>
                <a href="#" className="p-2">
                  <img src={ios} alt="" />
                </a>
              </div>
              <div className="w-75">
                <input
                  type="text"
                  className="form-control bg-primary-subtle my-2 rounded-4"
                  id="name"
                  placeholder="Name"
                  name="name"
                />
                <input
                  type="number"
                  className="form-control bg-primary-subtle my-2 rounded-4"
                  id="phone"
                  placeholder="Phone Number"
                  name="phone"
                />
                <input
                  type="email"
                  className="form-control bg-primary-subtle my-2 rounded-4"
                  id="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <button className="btn btn-primary px-5 mb-5 rounded-4">
                Send
              </button>
            </div>
            <div className="col-md-4 d-none d-md-flex align-items-end">
              <img className="img-fluid" src={iPhone14} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUS;
