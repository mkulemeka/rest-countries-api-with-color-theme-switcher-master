import React from "react";
import Container from "react-bootstrap/Container";
import "./Filter.scss";

const Filter = ({ handleFilter, handleSearch, searchInput }) => {
  return (
    <div className="app__filter pt-5">
      <Container>
        <div className="row justify-content-between gap-2">
          <div className="col-sm-4">
            <input
              type="text"
              placeholder="Search for a country..."
              className="form-control-lg"
              id="search"
              value={searchInput}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className='filter-container col-sm-2 d-flex justify-content-end'>
            <select
              className="app__filter-dropdown form-control"
              onChange={handleFilter}
            >
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Filter;
