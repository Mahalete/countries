import React from "react";
import number from "easy-number-formatter";
//import "./CountryCard.css";
import { Link } from "react-router-dom";
// const CountryCard = ({
//   // instead of using props, I am passing object directely. Here we MUST pass with in order not to use object
//   name,
//   capital,
//   languages,
//   currencies,
//   flags,
//   region,
//   population,
// }) => {
//   return (
//     <Link to={capital}>
//       <div className="country" key={name}>
//         <h2> {name}</h2> <h3>{capital}</h3>
//         <img className="flag_img" src={flags.png} alt={name} />
//         <div className="cardContent">
//           <p>
//             Language(s):
//             {languages.map((lang, i) => (
//               <span key={i}> {lang.name} </span>
//             ))}
//           </p>
//           <p>
//             Currencies:
//             {currencies.map((mon, i) => (
//               <span key={i}>
//                 {mon.name} - {mon.symbol}
//               </span>
//             ))}
//           </p>
//           <p>
//             Population:
//             <span className="low">{number.formatNumber(population)}</span>
//           </p>
//           <p>
//             Region:
//             <span className="low">{region}</span>
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CountryCard;
const CountryCard = ({
  name,
  capital,
  languages,
  currencies,
  population,
  flags,
}) => {
  return (
    <Link className="inline-block ml-5  " to={capital}>
      <div className=" bg-gray-200 p-4 rounded-md w-1/2.7 mb-5">
        <div className="md:full mx-auto Roboto md:font-serif" key={name}>
          <h2 className=" text-2xl"> {name}</h2>{" "}
          <h3 className="italic text-1xl">{capital}</h3>
          <img
            className=" bg-no-repeat opacity-75 w-4/12 pb-4 pt-2 rounded-full py-5 px-6 "
            src={flags.png}
            alt={name}
          />
          <div className="bg-yellow-50 pl-2">
            <p className="Roboto md:font-serif">
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
