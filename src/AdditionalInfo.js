import React from "react";
import classes from "./AdditionalInfo.module.css";

const AdditionalInfo = ({ report, standard }) => {
  const {
    main: {
      feels_like: feels,
      temp_min: min,
      temp_max: max,
      pressure,
      humidity,
    },
    wind: { speed },
  } = report;
  return (
    <section className={classes.info}>
      <div>
        ⬇️Min <br /> {Math.round(min)} {standard ? "° C" : "F"}
      </div>
      <div>
        ⬆️Max <br /> {Math.round(max)} {standard ? "° C" : "F"}
      </div>
      <div>
        ❄️Feels like <br /> {Math.round(feels)} {standard ? "° C" : "F"}
      </div>
      <div>
        💨Pressure <br /> {pressure} hPa
      </div>
      <div>
        🩸Humidity <br /> {humidity}%
      </div>
      <div>
        🍃Wind speed <br /> {speed} kmph
      </div>
    </section>
  );
};

export default AdditionalInfo;
