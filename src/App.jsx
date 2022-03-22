import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar, Countries, Country } from "./components";

import "./App.scss";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const Url = "https://restcountries.com/v2/all";
  useEffect(() => {
    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput) {
      const filteredSearch = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFilteredCountries(filteredSearch);
    } else {
      setFilteredCountries(countries);
    }
  };

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter((country) => {
          const { region } = country;
          return region.includes(e.target.value);
        })
      );
    }
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Router>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Countries
                isLoading={isLoading}
                filteredCountries={filteredCountries}
                searchInput={searchInput}
                handleFilter={handleFilter}
                handleSearch={handleSearch}
              />
            }
          />
          <Route path="/:name" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
