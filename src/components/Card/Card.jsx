import React from "react";
import {motion } from 'framer-motion'
import "./Card.scss";

const Card = ({ name, flag, population, region, capital }) => {
  return (
    <motion.div whileInView={{y:[-20, 0], opacity:[0,1]}} transition={{duration: .75}} className='app-card col-3 col-sm-8'>
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
    </motion.div>
  );
};

export default Card;
