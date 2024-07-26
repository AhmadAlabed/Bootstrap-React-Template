import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import SearchSection from "../../components/SearchSection/SearchSection";
import PopularCars from "../../components/PopularCars/PopularCars";
import HowWork from "../../components/HowWork/HowWork";
import Vendors from "../../components/Vendors/Vendors";
import WhyUS from "../../components/WhyUS/WhyUS";
import Testimonial from "../../components/Testimonial/Testimonial";
import ContactUS from "../../components/ContactUS/ContactUS";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [cars, setCars] = useState([]);
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
      <ContactUS />
      <Footer />
    </>
  );
};

export default Home;
