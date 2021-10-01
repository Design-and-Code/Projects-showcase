import React from "react";
import "../styles/AppWeatherContainer.css";
const api = {
  key: "628a98ea1de25d1e700cec0484b6a0bc",
  uri: "https://openweathermap.org/img/wn/",
};

const AppWeather = (props) => {
  return (
    <div className="weather-container">
      <div className="widget-container">
        <div className="weather-icon">
          <img src={`${api.uri}${props.image}@2x.png`} alt="Logo" />
        </div>

        <div className="temperature-value">
          <p>
            {Math.floor(props.temperature)} °<span>C</span>
          </p>
        </div>
      </div>

      <div className="location">
        <p>
          {props.location}, {props.country}
        </p>
      </div>
    </div>
  );
};

export default AppWeather;
