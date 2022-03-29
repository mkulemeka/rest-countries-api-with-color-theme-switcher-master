import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Card.scss";

const Card = ({ name, flag, population, region, capital }) => {
  return (
    <motion.div
      className="app-card col-3 col-sm-8"
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.75 }}
    >
      <Link to={`/${name}`}>
        <div className="app__card">
          <div className="app__card-img">
            <img src={flag} alt={name} />
          </div>
          <div className="app__card-text p-4">
            <h4 className="app__card-title pb-1">{name}</h4>
            <div className="app__card-details mb-3">
              <p>
                <span>Population:</span> {population}
              </p>
              <p>
                <span>Region:</span> {region}
              </p>
              <p>
                <span>Capital:</span> {capital}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
