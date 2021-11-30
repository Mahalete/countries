import React, { Component } from "react";
import axios from "axios";
import Spinner from "react-spinner-material";
import CountryCard from "./CountryCard";

class CountriesList extends Component {
  state = {
    data: [],
    searchInput: "",
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population,region"
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
              .map((country) => (
                <CountryCard {...country} key={country.name} /> // Taking card data coming as object is called country , and we taking this passing to the next component opened. Gets all the data in there.
              ))}
          </div>
        </div>
      );
    }
  }
}
export default CountriesList;
