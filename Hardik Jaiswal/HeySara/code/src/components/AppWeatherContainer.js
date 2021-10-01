import React, { useState, useEffect } from "react";
import "../styles/AppWeatherContainer.css";
import AppWeather from "./AppWeather";

const api = {
  key: "628a98ea1de25d1e700cec0484b6a0bc",
  uri: "http://openweathermap.org/img/wn/",
};

const AppWeatherContainer = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
  };

  useEffect(() => {
    const getWeather = async () => {
      try {
        getPosition();
        if (latitude && longitude) {
          await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api.key}`
          )
            .then((res) => res.json())
            .then((data) => {
              setTemperature(data.main.temp - 273);
              setLocation(data.name);
              setCountry(data.sys.country);
              setImage(data.weather[0].icon);
            });
          setLoading(true);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getWeather();
  }, [latitude, longitude]);

  return (
    <div>
      {loading ? (
        <AppWeather
          temperature={temperature}
          location={location}
          country={country}
          image={image}
        />
      ) : (
        null
      )}
    </div>
  );
};

export default AppWeatherContainer;