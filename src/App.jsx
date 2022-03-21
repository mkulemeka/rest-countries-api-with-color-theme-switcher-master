import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import { Navbar, Card, Filter } from "./components";
import { motion } from "framer-motion";
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
      console.log(filteredSearch);
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
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Filter
        search={searchInput}
        handleFilter={handleFilter}
        handleSearch={handleSearch}
      />
      <Container className="card-container mt-5">
        <div>
          {isLoading ? (
            <h3
              className="text-center w-100"
              style={{ color: "var(--text-color)" }}
            >
              Loading...
            </h3>
          ) : (
            <motion.div className="row justify-content-between gap-2">
              {filteredCountries.map((country, index) => {
                const { name, flag, population, region, capital } = country;
                return (
                  <Card
                    key={name + index}
                    name={name}
                    flag={flag}
                    population={population}
                    region={region}
                    capital={capital}
                  />
                );
              })}
            </motion.div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default App;
