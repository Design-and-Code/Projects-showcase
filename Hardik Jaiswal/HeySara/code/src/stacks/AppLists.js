import React from "react";
import AppTimeContainer from "../components/AppTimeContainer";
import "../styles/AppLists.css";
import AppWeatherContainer from "../components/AppWeatherContainer";

const AppLists = () => {
  return (
    <ul>
      <li className="time-container">
        <AppTimeContainer />
      </li>

      <li>
        <AppWeatherContainer />
      </li>
    </ul>
  );
};

export default AppLists;
