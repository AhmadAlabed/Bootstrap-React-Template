import React from "react";
import location from "../../assets/images/landing-page/location.png";
import caricon from "../../assets/images/landing-page/car-icon.png";

const HowWork = () => {
  return (
    <>
      <section className="py-5 text-center">
        <button className="btn btn-outline-primary text-uppercase">
          how it work
        </button>
        <h2 className="m-4 text-capitalize">Most popular cars rental deals</h2>
        <div className="row px-md-5 w-75 mx-auto justify-content-center">
          <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            <div>
              <img src={location} alt="location" />
              <h5>Choose location</h5>
              <p className="small w-75 mx-auto">
                Choose your and find your best car
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            <div>
              <img src={caricon} alt="car-icon" />
              <h5>Pick-up date</h5>
              <p className="small w-75 mx-auto">
                Select your pick up date and time to book your car
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            <div>
              <img src={location} alt="location" />
              <h5>Book your car</h5>
              <p className="small w-75 mx-auto">
                Book your car and we will deliver it directly to you
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWork;
