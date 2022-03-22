import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./Country.scss";

const Country = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  const Url = `https://restcountries.com/v2/name/${name}`;
  useEffect(() => {
    fetch(Url)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        setIsLoading(false);
      });
  }, [Url]);
  return (
    <>
      {isLoading ? (
        <h3
          className="text-center w-100 my-5"
          style={{ color: "var(--text-color)" }}
        >
          Loading...
        </h3>
      ) : (
        <Container className="app__country">
          <Link to="/" className="btn btn-light dark:btn-dark my-5">
            &larr; Back
          </Link>
          {country.map(
            (
              {
                name,
                nativeName,
                capital,
                flag,
                population,
                region,
                subregion,
                topLevelDomain,
                currencies,
                languages,
              },
              index
            ) => (
              <section key={name + index}>
                <div className="app__country-img">
                  <img src={flag} alt={name} />
                </div>
                <div className="app__country-details py-5">
                  <h3>{name}</h3>
                  <div className="details">
                    <div>
                      <p>
                        <span>Native Name: </span>
                        {nativeName}
                      </p>
                      <p>
                        <span>Population: </span>
                        {population}
                      </p>
                      <p>
                        <span>Region: </span>
                        {region}
                      </p>
                      <p>
                        <span>Sub Region: </span>
                        {subregion}
                      </p>
                      <p>
                        <span>Capital: </span>
                        {capital}
                      </p>
                    </div>
                    <div>
                      <p>
                        <span>Top Level Domain: </span>
                        {topLevelDomain}
                      </p>
                      <p>
                        <span>Currencies: </span>
                        {currencies.map(({ name }) => (
                          <span key={name}>{name}</span>
                        ))}
                      </p>
                      <p>
                        <span>Languages: </span>
                        {languages.map(({ name }) => (
                          <span key={name}>
                            {name}, {""}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )
          )}
        </Container>
      )}
    </>
  );
};

export default Country;
