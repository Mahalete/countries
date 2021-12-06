import React, { Component } from "react";
// import "./CountrySingle.css";
import axios from "axios";

function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
}

class CountrySingle extends Component {
  state = {
    country: {},
    weather: {},
    isLoading: true,
  };

  componentDidMount() {
    Promise.all([
      getCountry(this.props.params.name),
      getWeather(this.props.params.name),
    ]).then((res) => {
      this.setState({
        country: res[0].data[0],
        weather: res[1].data,
        isLoading: false,
      });
      console.log("response", res);
      console.log("state country", this.state.country);
      console.log("state weather", this.state.weather);
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }

    if (!this.state.isLoading) {
      return (
        <main>
          <div className="bg-gradient-to-br from-yellow-400 to-pink-500 via-red-400 w-full h-screen flex items-center justify-center">
            <div className="bg-gray-300 p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md">
              <img
                className="h-32 w-32"
                viewBox="0 -32 512 512"
                src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
                alt={this.state.weather.weather[0].description}
              />

              <div className="text-center text-gray-500 mt-2 text-xl">
                Right now it is{" "}
                <p className="text-7xl font-bold text-right text-gray-900">
                  {this.state.weather.main.temp}°
                </p>{" "}
                in{" "}
                <p className="italic text-3xl text-gray-900">
                  {this.state.country.capital}
                </p>
              </div>
            </div>
          </div>
        </main>
      );
    }
  }
}

export default CountrySingle;
