import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { BsArrowLeft} from 'react-icons/bs'
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
          <button className="button my-5">
            <Link to="/" >
              <BsArrowLeft className="mx-2" /> Back
            </Link>
          </button>
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
                borders,
              },
              index
            ) => (
              <section key={name + index} >
                <div className="app__country-img">
                  <img src={flag} alt={name} />
                </div>
                <div className="app__country-details py-5 d-flex justify-content-center flex-column">
                  <h3 className="country-name">{name}</h3>
                  <div className="details flex-wrap">
                    <div>
                      <p>
                        <span className="text-headings">Native Name: </span>
                        {nativeName}
                      </p>
                      <p>
                        <span className="text-headings">Population: </span>
                        {population}
                      </p>
                      <p>
                        <span className="text-headings">Region: </span>
                        {region}
                      </p>
                      <p>
                        <span className="text-headings">Sub Region: </span>
                        {subregion}
                      </p>
                      <p>
                        <span className="text-headings">Capital: </span>
                        {capital}
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="text-headings">
                          Top Level Domain:{" "}
                        </span>
                        {topLevelDomain}
                      </p>
                      <p>
                        <span className="text-headings">Currencies: </span>
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
