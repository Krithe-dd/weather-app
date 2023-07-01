import React from "react";
import classes from "./Input.module.css";
import Notify from "./Notify";
const Input = (props) => {
  const changeDegree = () => {
    props.setStandard();
  };
  const changeCityName = (e) => {
    props.setCityName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit((prev) => !prev);
  };
  return (
    <div className={classes.inputWrapper}>
      <form onSubmit={handleSubmit}>
        <input
          value={props.city}
          onChange={changeCityName}
          name="city"
          type="text"
          placeholder="Search for a city"
        />
        <button type="button" onClick={changeDegree}>
          {props.standard ? "F" : "° C"}
        </button>
      </form>
      {props.isError && <Notify />}
    </div>
  );
};

export default Input;
