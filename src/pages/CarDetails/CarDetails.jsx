import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

useNavigate;
const CarDetails = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const getSpecificCar = async function (id) {
    try {
      let response = await axios.get(
        `https://freetestapi.com/api/v1/cars/${id}`
      );
      console.log(response.data);
    } catch (error) {
      navigate("/home/all-vehicles");
    }
  };
  useEffect(() => {
    getSpecificCar(id);
  }, []);
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
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
            {id}
          </li>
        </ol>
      </nav>
    </>
  );
};

export default CarDetails;
