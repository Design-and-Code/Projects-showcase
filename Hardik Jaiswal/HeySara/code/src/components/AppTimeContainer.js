import React, { useEffect, useState } from "react";
import "../styles/AppTimeContainer.css";
import AppTime from "./AppTime";
import AppLoader from "./AppLoader";

const AppTimeContainer = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const Time = async () => {
     setInterval(() => {
      let dateObj = new Date();
      setTime(dateObj.toLocaleTimeString());
      setDate(
        days[dateObj.getUTCDay()] +
          " " +
          dateObj.getUTCDate() +
          " " +
          months[dateObj.getUTCMonth()]
      );
      setLoading(true);
    }, 1000);
  };

  useEffect(() => {
    Time();
  })

  return (
    <div>
      {loading ? (
        <AppTime date={date} time={time} />
      ) : (
        <AppLoader name="time-loader"/>
      )}
    </div>
  );
};

export default AppTimeContainer;
