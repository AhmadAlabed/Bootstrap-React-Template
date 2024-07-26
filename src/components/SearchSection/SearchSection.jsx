import React, { useState } from "react";

const SearchSection = ({ searchByNameOrTitle, limit }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <section className="container text-center py-5">
        <div className="input-group mb-3 shadow">
          <span className="input-group-text">
            <i className="bi bi-geo-alt-fill"></i>
          </span>
          <input
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Search by name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            onClick={() => {
              searchByNameOrTitle(searchText, limit);
            }}
            className="btn btn-primary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        <button className="btn btn-outline-primary text-uppercase">
          POPULAR RENTAL DEALS
        </button>
      </section>
    </>
  );
};

export default SearchSection;
