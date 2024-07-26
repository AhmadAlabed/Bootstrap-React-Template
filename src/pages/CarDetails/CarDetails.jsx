import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AudiCar from "../../assets/images/sec-5/AudiCar.png";
import card from "../../assets/images/card";
const CarDetails = () => {
  const [car, setCar] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  const getSpecificCar = async function (id) {
    try {
      let { data } = await axios.get(
        `https://freetestapi.com/api/v1/cars/${id}`
      );
      setCar(data);
    } catch (error) {
      navigate("/home/all-vehicles");
    }
  };
  useEffect(() => {
    getSpecificCar(id);
  }, []);
  return (
    <>
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/home/all-vehicles">Cars</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Car details
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {`${car.make} ${car.model}`}
            </li>
          </ol>
        </nav>
      </div>
      <div className=" container-fluid">
        <div className="row">
          <div className="col-12  overflow-visible col-md-5 align-items-center audicar__box py-5 car--animationX">
            <img className="img-fluid" src={AudiCar} alt="" />
          </div>
          <div className="col-12 offset-0 offset-md-1 col-md-6">
            <button className="mb-3 btn btn-outline-primary text-uppercase">
              why choose us
            </button>
            <h3 className="h4 mb-3 text-capitalize">
              We offer the best experience with our rental deals
            </h3>
            <div className="d-flex align-items-baseline ">
              <img className="me-1" src={card.user} alt="" />
              <p className="fw-light small">2 Passanger</p>
            </div>
            <div className="d-flex align-items-baseline ">
              <img className="me-1" src={card.Airconditioning} alt="" />
              <p className="fw-light small">Air conditioning</p>
            </div>
            <div className="d-flex align-items-baseline ">
              <img className="me-1" src={card.Frame} alt="" />
              <p className="fw-light small">{`${car.transmission}`}</p>
            </div>
            <div className="d-flex align-items-baseline ">
              {" "}
              <img className="me-1" src={card.doors} alt="" />
              <p className="fw-light small">2 Doors</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
