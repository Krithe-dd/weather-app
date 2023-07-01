import React from "react";
import classes from "./CurrentWeather.module.css";
const CurrentWeather = (props) => {
  const {
    name,
    sys: { country },
    weather: [{ description }],
    main: { temp },
  } = props.report;
  return (
    <section className={classes.container}>
      <div className={classes.city}>
        <p>
          {name}, {country}
        </p>
        <p>☁️</p>
        <p>{description}</p>
      </div>
      <div className={classes.temperature}>
        {Math.round(temp)} {props.standard ? "° C" : "F"}
      </div>
    </section>
  );
};

export default CurrentWeather;
