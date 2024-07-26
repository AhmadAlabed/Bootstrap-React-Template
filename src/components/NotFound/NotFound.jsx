import React from "react";
import notFoundImg from "../../assets/images/404-not-found.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="vh-100 d-flex justify-content-center">
        <button
          className="btn btn-dark position-fixed  top-0 start-0 m-5"
          onClick={() => {
            navigate("/home");
          }}
        >
          Back To Home
        </button>
        <img className="img-fluid h-100 " src={notFoundImg} alt="" />
      </div>
    </>
  );
};

export default NotFound;
