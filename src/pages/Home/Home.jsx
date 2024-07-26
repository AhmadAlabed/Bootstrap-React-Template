import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import SearchSection from "../../components/SearchSection/SearchSection";
import PopularCars from "../../components/PopularCars/PopularCars";
import HowWork from "../../components/HowWork/HowWork";
import Vendors from "../../components/Vendors/Vendors";
import WhyUS from "../../components/WhyUS/WhyUS";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  const [cars, setCars] = useState([]);
  // const [searchText, setSearchText] = useState("");
  const getlimitCars = async function (limit) {
    try {
      let { data } = await axios.get(
        `https://freetestapi.com/api/v1/cars?limit=${limit}`
      );
      setCars(data);
    } catch (error) {
      console.log(error);
    }
  };
  const searchByNameOrTitle = async function (text, limit) {
    try {
      let { data } = await axios.get(
        `https://freetestapi.com/api/v1/cars?search=${text}&limit=${limit}`
      );
      setCars(data);
    } catch (error) {
      console.log(error);
    }
    // if (text == "") {
    //   getlimitCars(4);
    //   return;
    // }
    // try {
    //   let { data } = await axios.get(`https://freetestapi.com/api/v1/cars`);
    //   let newDate = data.filter((ele) => {
    //     if (
    //       ele.make.toLowerCase().includes(text.toLowerCase()) ||
    //       ele.model.toLowerCase().includes(text.toLowerCase())
    //     )
    //       return true;
    //     return false;
    //   });
    //   setCars(newDate);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  useEffect(() => {
    getlimitCars(4);
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <SearchSection searchByNameOrTitle={searchByNameOrTitle} limit={4} />
      <PopularCars cars={cars} />
      <HowWork />
      <Vendors />
      <WhyUS />
      <Testimonial />
      {/* <div className="input-group mb-3 shadow">
        <span className="input-group-text">
          <i className="bi bi-geo-alt-fill"></i>
        </span>
        <input
          // onChange={(e) => {
          //   setSearchText(e.target.value);
          // }}
          type="text"
          className="form-control"
          placeholder="Search by name"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          // onClick={() => {
          //   searchByNameOrTitle(searchText);
          // }}
          className="btn btn-primary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div> */}
      {/* {cars.map((car) => (
        <div key={car.id}>
          <p>{car.make}</p>
          <Link
            to={`/home/all-vehicles/car/${car.id}`}
            className="btn btn-outline-primary"
          >
            Show Details
          </Link>
        </div>
      ))} */}
      {/* <Link to="/home/all-vehicles" className="btn btn-danger">
        Show All
      </Link> */}
    </>
  );
};

export default Home;
