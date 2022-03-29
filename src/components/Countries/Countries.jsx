import React from "react";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import { Card, Filter } from "../../components";
import "./Countries.scss";

const Countries = ({
  isLoading,
  filteredCountries,
  searchInput,
  handleFilter,
  handleSearch,
}) => {
  return (
    <>
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
            <motion.div
              className="app__display"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{staggerChildren: 3}}
            >
              {filteredCountries.map(
                ({ name, flag, population, region, capital }, index) => {
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
                }
              )}
            </motion.div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Countries;
