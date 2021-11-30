import React, { Component } from "react";
import "./CountrySingle.css";
import moment from "moment";
import axios from "axios";
function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}
function getWeather(capital) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
}
class CountrySingle extends Component {
  state = {
    country: [],
    weather: [],
  };

  componentDidMount() {
    Promise.all([getCountry(), getWeather()]).then((res) => {
      this.setState({ country: res[0].data, weather: res[1].data });
    });
  }
  render() {
    return (
      <div>
        <h1 className="title_capital">Capital City Weather forcast</h1>
        <h2 className="country_capital">{this.props.params.name}</h2>
        {/* reading the parameter of that root, we can't use Use params so , this comes from RouteWrapper */}

        <div className="date_time">
          {" "}
          {moment().format("DD-MM-YYYY hh:mm:ss")}
        </div>
      </div>
    );
  }
}

export default CountrySingle;
