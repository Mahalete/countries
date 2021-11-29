import React from "react";
import number from "easy-number-formatter";
import "./CountryCard.css";
import { Link } from "react-router-dom";
const CountryCard = ({
  // instead of using props, I am passing object directely. Here we MUST pass with in order not to use object
  name,
  capital,
  languages,
  currencies,
  flags,
  region,
  population,
}) => {
  return (
    <Link to={capital}>
      <div className="country" key={name}>
        <h2> {name}</h2> <h3>{capital}</h3>
        <img src={flags.png} alt={name} />
        <div className="cardContent">
          <p>
            Language(s):
            {languages.map((lang, i) => (
              <span key={i}> {lang.name} </span>
            ))}
          </p>
          <p>
            Currencies:
            {currencies.map((mon, i) => (
              <span key={i}>
                {mon.name} - {mon.symbol}
              </span>
            ))}
          </p>
          <p>
            Population:
            <span className="low">{number.formatNumber(population)}</span>
          </p>
          <p>
            Region:
            <span className="low">{region}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
