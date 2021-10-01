import React from "react";
import "../styles/AppTimeContainer.css";

const AppTime = (props) => {
  return (
    <div id="time">
      <p id="crntTime">{props.time}</p>
      <p id="crntDate">{props.date}</p>
    </div>
  );
};

export default AppTime;
