import React, { Component } from "react";
import axios from "axios";
import number from "easy-number-formatter";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population"
      )
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <div className="countries">
        {this.state.data.map((c) => (
          <div className="country" key={c.name}>
            <h2> {c.name}</h2> <h3>{c.capital}</h3>
            <img src={c.flags.png} alt={c.name} />
            <div className="cardContent">
              <p>
                Language(s):
                {c.languages.map((lang, i) => (
                  <span key={i}> {lang.name} </span>
                ))}
              </p>
              <p>
                Currencies:
                {c.currencies.map((mon, i) => (
                  <span key={i}>
                    {mon.name} - {mon.symbol}
                  </span>
                ))}
              </p>
              <p>
                Population:
                <span className="low">{number.formatNumber(c.population)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
