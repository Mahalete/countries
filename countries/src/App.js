import React, { Component } from "react";
import axios from "axios";
import Spinner from "react-spinner-material";
import number from "easy-number-formatter";

class App extends Component {
  state = {
    data: [],
    searchInput: "",
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
        console.log(this.state.data);
      });
  }
  searchHandler = (e) => {
    //if you want to use ES5 functions with class you need to use bind
    this.setState({ searchInput: e.target.value });
    console.log(this.state.searchInput);
  };

  render() {
    //same as if (this.state.isLoading === true)
    if (this.state.isLoading) {
      return (
        <div>
          <p>
            Wait, I am loading{" "}
            <Spinner radius={100} color={"#333"} stroke={6} visible={true} />
          </p>
        </div>
      );
    }
    if (!this.state.isloading) {
      return (
        <div>
          <header>
            <h1>Countries List</h1>
          </header>
          <input type="text" name="search" onChange={this.searchHandler} />
          <div className="countries">
            {this.state.data
              .filter((c) => {
                return c.name
                  .toLowerCase()
                  .includes(this.state.searchInput.toLowerCase());
              })
              .map((c) => (
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
                      <span className="low">
                        {number.formatNumber(c.population)}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      );
    }
  }
}
export default App;
