import React from "react";
import car from "../../assets/images/landing-page/car.png";
import andriod from "../../assets/images/landing-page/andriod.png";
import ios from "../../assets/images/landing-page/ios.png";
const Header = () => {
  return (
    <>
      <header className="py-lg-3">
        <div className="container-fluid">
          <div className="row gx-lg-3 gx-0">
            <div className="col-12 offset-xl-1 col-xl-3 offset-md-0 col-md-4 order-last order-md-first d-flex align-items-center">
              <div className="text-start container-sm">
                <h1 className="fw-bold">
                  Find, book and rent a car
                  <span className="text-primary underline"> Easily</span>
                </h1>
                <p>
                  Get a car wherever and whenever you need it with your IOS and
                  Android device.
                </p>
                <div className="d-flex">
                  <a href="#" className="p-2">
                    <img src={andriod} alt="" />
                  </a>
                  <a href="#" className="p-2">
                    <img src={ios} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 text-end">
              <img className="car--animation" src={car} alt="car" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
