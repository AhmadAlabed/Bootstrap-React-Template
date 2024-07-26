// External Library
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchSection from "../../components/SearchSection/SearchSection";
import Cars from "../../components/Cars/Cars";

const AllVehicles = () => {
  // State
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  //Static
  const totalItems = 30;
  const itemsPerPage = 16;
  const calcTotalPages = () => {
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  };
  //Calc
  const pages = () => {
    let pagesArr = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArr.push(
        <li
          key={i}
          className={currentPage == i ? "page-item  active" : "page-item"}
          onClick={() => {
            setCurrentPage(i);
          }}
        >
          <button className="page-link">{i}</button>
        </li>
      );
    }
    return pagesArr;
  };
  const calcStartEndIndex = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };
  const nextPage = () => {
    if (currentPage == totalPages) return;
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  };
  const getlimitCars = async function (limit) {
    try {
      let { data } = await axios.get(
        `https://freetestapi.com/api/v1/cars?limit=${limit}`
      );
      setCars(
        data.slice(calcStartEndIndex().startIndex, calcStartEndIndex().endIndex)
      );
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
    calcTotalPages();
  }, []);
  useEffect(() => {
    getlimitCars(calcStartEndIndex().endIndex);
  }, [currentPage]);

  return (
    <>
      <div className=" container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cars
            </li>
          </ol>
        </nav>
        {/* ------------------------------------------------ */}
        <SearchSection
          searchByNameOrTitle={searchByNameOrTitle}
          limit={calcStartEndIndex().endIndex}
        />
        {/* ------------------------------------------------ */}
        <Cars cars={cars} />
        {/* ------------------------------------------------ */}
        <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center"
        >
          <ul className="pagination">
            <li className="page-item">
              <button onClick={previousPage} className="page-link">
                Previous
              </button>
            </li>
            {pages()}
            <li className="page-item">
              <button onClick={nextPage} className="page-link">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* ------------------------------------------------ */}
    </>
  );
};

export default AllVehicles;
