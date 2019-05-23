import React from "react";
import axios from "axios";
import "./weather.css";

function getLocation() {
  return axios.get("https://ipapi.co/json/");
}

function getWeather(location) {
  let units = "&units=metric";
  let appid = "&APPID=e8656d00ae56fd09428db5cae581be02";

  return axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      units +
      appid
  );
}
export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "F",
      location: "",
      weather: "",
      temp: 0
    };
  }

  componentDidMount() {
    let _this = this;

    getLocation()
      .then(function(result) {
        let loc = result.data.city + ", " + result.data.country;

        getWeather(loc).then(function(result) {
          console.log(result);
          _this.setState({
            location: loc,
            weather: result.data.weather[0],
            temp: (result.data.main.temp * (9 / 5) + 32).toFixed(0)
          });
        });
      })
      .catch(
        _this.setState({
          location: "Cannot get location.",
          temp: null
        })
      );
  }

  changeFormat(format) {
    let temperature = 0;
    let newFormat = "";

    if (format === "C") {
      temperature = (this.state.temp * (9 / 5) + 32).toFixed(0);
      newFormat = "F";
    } else {
      temperature = ((this.state.temp - 32) * (5 / 9)).toFixed(0);
      newFormat = "C";
    }

    this.setState({
      format: newFormat,
      temp: temperature
    });
  }

  render() {
    let hr = new Date().getHours();
    let tod = hr >= 17 ? "night" : "day";

    return (
      <div className="weatherContainer" id="weather">
        <h1>
          <a
            href="https://www.weatherbug.com/weather-forecast/now/garland-tx-75040"
            target="_blank"
          >
            Local Weather
          </a>
        </h1>
        <div className="location">
          <h2>{this.state.location}</h2>
          <p>{this.state.weather.main}</p>
          <i className={"wi wi-owm-" + tod + "-" + this.state.weather.id} />
          {this.state.temp && (
            <p>
              {this.state.temp} &#176;{this.state.format}
            </p>
          )}
          {this.state.temp && (
            <SwitchFormat
              changeFormat={this.changeFormat.bind(this)}
              format={this.state.format}
            />
          )}
        </div>
      </div>
    );
  }
}

class SwitchFormat extends React.Component {
  handleChange(e) {
    this.props.changeFormat(e.target.value);
  }

  render() {
    return (
      <button value={this.props.format} onClick={this.handleChange.bind(this)}>
        F° / C°
      </button>
    );
  }
}
